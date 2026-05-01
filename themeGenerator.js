const themes = require('./themes');

// ── MODE DETECTION ─────────────────────────────────────────────────────────────
// If ANTHROPIC_API_KEY is set → use Claude AI for smart theme generation
// If not set → fall back to keyword matching
const USE_AI = !!process.env.ANTHROPIC_API_KEY;

if (USE_AI) {
  console.log('[ThemeGenerator] Mode: Claude AI ✨');
} else {
  console.log('[ThemeGenerator] Mode: Keyword matching (add ANTHROPIC_API_KEY to enable AI)');
}

// ── AI-POWERED GENERATION (Claude) ────────────────────────────────────────────
async function generateWithAI(eventData, exclude = []) {
  const Anthropic = require('@anthropic-ai/sdk');
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const availableThemes = themes.filter(t => !exclude.includes(t.id));
  const themeOptions = availableThemes.map(t => `- ${t.id}: ${t.name} — ${t.description}`).join('\n');

  const prompt = `You are an expert event invite designer with deep knowledge of global cultures, traditions, and celebrations.

Event details:
- Event Name: ${eventData.eventName}
- Hosted by: ${eventData.hostName || 'Not specified'}
- Date: ${eventData.date}
- Time: ${eventData.time || 'Not specified'}
- Venue: ${eventData.venue}
- Description: ${eventData.description || 'Not specified'}

Available themes to choose from:
${themeOptions}

Your task:
1. Pick the 3 most suitable theme IDs from the list above for this specific event
2. For each theme, generate a punchy headline and warm body text that feels personal and appropriate for this exact event
3. Consider the cultural context, age group, occasion type, and tone
4. Make the copy feel handcrafted, not generic

Respond ONLY with a valid JSON array of exactly 3 objects:
[
  {
    "id": "theme_id",
    "headline": "Your custom headline here",
    "body": "Your custom body text here (2-3 sentences max)"
  }
]`;

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }]
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error('Invalid AI response format');

  const aiResults = JSON.parse(jsonMatch[0]);

  // Merge AI-generated copy with theme visual data
  return aiResults.map(result => {
    const theme = themes.find(t => t.id === result.id);
    if (!theme) return null;
    return {
      id: theme.id,
      name: theme.name,
      description: theme.description,
      palette: theme.palette,
      gradient: theme.gradient,
      floaters: theme.floaters,
      emoji: theme.emoji,
      headline: result.headline,
      body: result.body
    };
  }).filter(Boolean);
}

// ── KEYWORD-BASED GENERATION (fallback) ───────────────────────────────────────
function generateWithKeywords(eventData, exclude = []) {
  const desc = (eventData.description + ' ' + eventData.eventName).toLowerCase();
  const scored = themes
    .filter(t => !exclude.includes(t.id))
    .map(theme => ({
      ...theme,
      score: theme.keywords.filter(k => desc.includes(k)).length
    }));

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3);

  return top.map(t => ({
    id: t.id,
    name: t.name,
    description: t.description,
    palette: t.palette,
    gradient: t.gradient,
    floaters: t.floaters,
    emoji: t.emoji,
    headline: t.generateHeadline(eventData),
    body: t.generateBody(eventData)
  }));
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
async function generateThemes(eventData, exclude = []) {
  if (USE_AI) {
    try {
      return await generateWithAI(eventData, exclude);
    } catch (e) {
      console.error('[ThemeGenerator] AI failed, falling back to keywords:', e.message);
      return generateWithKeywords(eventData, exclude);
    }
  }
  return generateWithKeywords(eventData, exclude);
}

module.exports = { generateThemes };
