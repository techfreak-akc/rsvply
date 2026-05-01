module.exports = [
  {
    id: 'playful',
    name: '🎨 Playful & Bright',
    description: 'Colorful, fun, full of energy',
    emoji: ['🎉', '🌈', '✨', '🎊', '🎈'],
    floaters: ['🎈', '🎉', '⭐', '🌈', '🎊', '✨', '🎁', '🎀'],
    keywords: ['birthday', 'kids', 'children', 'fun', 'party', 'cartoon', 'dinosaur', 'animals', 'cars', 'toys', 'school'],
    palette: { bg: '#0a0020', primary: '#ff006e', accent: '#ffee00', glow: 'rgba(255,0,110,0.4)', text: '#ffffff', card: 'rgba(255,255,255,0.06)' },
    gradient: 'radial-gradient(ellipse at 20% 20%, rgba(255,0,110,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,238,0,0.15) 0%, transparent 60%)',
    generateHeadline: (e) => `🎉 ${e.eventName.toUpperCase()}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites' : 'You\'re invited'} to celebrate ${e.eventName}! Get ready for an amazing time filled with fun, laughter, and great memories. Come join us! 🎈`
  },
  {
    id: 'elegant',
    name: '✨ Elegant & Refined',
    description: 'Sleek, sophisticated, premium feel',
    emoji: ['✨', '🥂', '💫', '🌟', '💐'],
    floaters: ['✨', '💫', '⭐', '🌟', '💎', '🥂', '🌸', '💐'],
    keywords: ['wedding', 'anniversary', 'gala', 'formal', 'dinner', 'reception', 'bridal', 'shower', 'graduation', 'corporate', 'launch', 'award'],
    palette: { bg: '#05000f', primary: '#d4af37', accent: '#ffffff', glow: 'rgba(212,175,55,0.4)', text: '#f0e6d3', card: 'rgba(212,175,55,0.06)' },
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.2) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.1) 0%, transparent 60%)',
    generateHeadline: (e) => `✨ ${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' cordially invites you' : 'You are cordially invited'} to ${e.eventName}. Please join us for an unforgettable evening of celebration and togetherness. 💫`
  },
  {
    id: 'epic',
    name: '⚡ Epic & Bold',
    description: 'Dark, dramatic, high energy',
    emoji: ['⚡', '🔥', '💥', '🗡️', '🏆'],
    floaters: ['⚡', '🔥', '💥', '⭐', '🏆', '🎯', '🌟', '💫'],
    keywords: ['sports', 'game', 'tournament', 'championship', 'football', 'soccer', 'basketball', 'racing', 'competition', 'team', 'superhero', 'gaming'],
    palette: { bg: '#000510', primary: '#ff4500', accent: '#00ff88', glow: 'rgba(255,69,0,0.5)', text: '#ffffff', card: 'rgba(255,69,0,0.08)' },
    gradient: 'radial-gradient(ellipse at 0% 50%, rgba(255,69,0,0.2) 0%, transparent 60%), radial-gradient(ellipse at 100% 50%, rgba(0,255,136,0.1) 0%, transparent 60%)',
    generateHeadline: (e) => `⚡ ${e.eventName.toUpperCase()} ⚡`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' presents' : 'Get ready for'} ${e.eventName}! This is going to be EPIC. Don't miss out — mark your calendar and show up ready! 🔥`
  },
  {
    id: 'warm',
    name: '🌸 Warm & Intimate',
    description: 'Cozy, personal, heartfelt',
    emoji: ['🌸', '💕', '🙏', '🌺', '💛'],
    floaters: ['🌸', '🌺', '💕', '🪔', '🌼', '✨', '🙏', '💛'],
    keywords: ['puja', 'pooja', 'religious', 'prayer', 'ceremony', 'cultural', 'traditional', 'family', 'reunion', 'gathering', 'housewarming', 'baby shower', 'mehendi', 'eid', 'diwali', 'christmas', 'thanksgiving'],
    palette: { bg: '#0f0500', primary: '#ff8c00', accent: '#ffd700', glow: 'rgba(255,140,0,0.4)', text: '#fff5e6', card: 'rgba(255,140,0,0.08)' },
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(255,140,0,0.25) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(255,215,0,0.1) 0%, transparent 60%)',
    generateHeadline: (e) => `🌸 ${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' warmly invites you' : 'You\'re warmly invited'} to ${e.eventName}. Your presence would mean the world to us. Come celebrate this special occasion with family and loved ones. 💕`
  },
  {
    id: 'cute',
    name: '🍭 Sweet & Cute',
    description: 'Pastel, bubbly, adorable',
    emoji: ['🍭', '🦄', '🌈', '💜', '🎀'],
    floaters: ['🦄', '🌈', '🍭', '💜', '🎀', '🌸', '⭐', '🍬'],
    keywords: ['unicorn', 'princess', 'fairy', 'ballet', 'pink', 'rainbow', 'cute', 'sweet', 'candy', 'mermaid', 'butterfly', 'flowers', 'garden'],
    palette: { bg: '#0d0015', primary: '#ff69b4', accent: '#dda0dd', glow: 'rgba(255,105,180,0.4)', text: '#fff0f5', card: 'rgba(255,105,180,0.07)' },
    gradient: 'radial-gradient(ellipse at 30% 30%, rgba(255,105,180,0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(221,160,221,0.15) 0%, transparent 60%)',
    generateHeadline: (e) => `🦄 ${e.eventName} 🌈`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites you' : 'You\'re invited'} to the most magical ${e.eventName} ever! Come dressed in your cutest outfit and get ready for a super fun time! 🎀💜`
  },
  {
    id: 'minimal',
    name: '🖤 Clean & Minimal',
    description: 'Simple, modern, no fuss',
    emoji: ['◆', '▸', '✦', '—', '·'],
    floaters: ['✦', '◆', '▸', '·', '○', '✦', '◇', '▹'],
    keywords: ['meetup', 'networking', 'conference', 'seminar', 'workshop', 'professional', 'office', 'team', 'business', 'product'],
    palette: { bg: '#080808', primary: '#ffffff', accent: '#888888', glow: 'rgba(255,255,255,0.15)', text: '#dddddd', card: 'rgba(255,255,255,0.04)' },
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
    generateHeadline: (e) => `${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites you' : 'You\'re invited'} to ${e.eventName}. Simple, straightforward, no fuss. We'd love to have you there.`
  }
];
