module.exports = [
  {
    id: 'playful',
    name: '🎨 Playful & Bright',
    description: 'Colorful, fun, full of energy',
    emoji: ['🎉', '🌈', '✨', '🎊', '🎈'],
    keywords: ['birthday', 'kids', 'children', 'fun', 'party', 'cartoon', 'dinosaur', 'animals', 'cars', 'toys', 'school'],
    palette: { bg: '#0a0020', primary: '#ff006e', accent: '#ffee00', cyan: '#00f5ff', text: '#ffffff' },
    generateHeadline: (e) => `🎉 ${e.eventName.toUpperCase()}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites' : 'You\'re invited'} to celebrate ${e.eventName}! Get ready for an amazing time filled with fun, laughter, and great memories. Come join us! 🎈`
  },
  {
    id: 'elegant',
    name: '✨ Elegant & Refined',
    description: 'Sleek, sophisticated, premium feel',
    emoji: ['✨', '🥂', '💫', '🌟', '💐'],
    keywords: ['wedding', 'anniversary', 'gala', 'formal', 'dinner', 'reception', 'bridal', 'shower', 'graduation', 'corporate', 'launch', 'award'],
    palette: { bg: '#05000f', primary: '#d4af37', accent: '#ffffff', cyan: '#c0c0c0', text: '#f0e6d3' },
    generateHeadline: (e) => `✨ ${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' cordially invites you' : 'You are cordially invited'} to ${e.eventName}. Please join us for an unforgettable evening of celebration and togetherness. 💫`
  },
  {
    id: 'epic',
    name: '⚡ Epic & Bold',
    description: 'Dark, dramatic, high energy',
    emoji: ['⚡', '🔥', '💥', '🗡️', '🏆'],
    keywords: ['sports', 'game', 'tournament', 'championship', 'football', 'soccer', 'basketball', 'racing', 'competition', 'team', 'superhero', 'gaming'],
    palette: { bg: '#000510', primary: '#ff4500', accent: '#00ff88', cyan: '#00f5ff', text: '#ffffff' },
    generateHeadline: (e) => `⚡ ${e.eventName.toUpperCase()} ⚡`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' presents' : 'Get ready for'} ${e.eventName}! This is going to be EPIC. Don't miss out — mark your calendar and show up ready! 🔥`
  },
  {
    id: 'warm',
    name: '🌸 Warm & Intimate',
    description: 'Cozy, personal, heartfelt',
    emoji: ['🌸', '💕', '🙏', '🌺', '💛'],
    keywords: ['puja', 'pooja', 'religious', 'prayer', 'ceremony', 'cultural', 'traditional', 'family', 'reunion', 'gathering', 'housewarming', 'baby shower', 'mehendi', 'eid', 'diwali', 'christmas', 'thanksgiving'],
    palette: { bg: '#0f0500', primary: '#ff8c00', accent: '#ffd700', cyan: '#ff6347', text: '#fff5e6' },
    generateHeadline: (e) => `🌸 ${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' warmly invites you' : 'You\'re warmly invited'} to ${e.eventName}. Your presence would mean the world to us. Come celebrate this special occasion with family and loved ones. 💕`
  },
  {
    id: 'cute',
    name: '🍭 Sweet & Cute',
    description: 'Pastel, bubbly, adorable',
    emoji: ['🍭', '🦄', '🌈', '💜', '🎀'],
    keywords: ['unicorn', 'princess', 'fairy', 'ballet', 'pink', 'rainbow', 'cute', 'sweet', 'candy', 'mermaid', 'butterfly', 'flowers', 'garden'],
    palette: { bg: '#0d0015', primary: '#ff69b4', accent: '#dda0dd', cyan: '#87ceeb', text: '#fff0f5' },
    generateHeadline: (e) => `🦄 ${e.eventName} 🌈`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites you' : 'You\'re invited'} to the most magical ${e.eventName} ever! Come dressed in your cutest outfit and get ready for a super fun time! 🎀💜`
  },
  {
    id: 'minimal',
    name: '🖤 Clean & Minimal',
    description: 'Simple, modern, no fuss',
    emoji: ['◆', '▸', '✦', '—', '·'],
    keywords: ['meetup', 'networking', 'conference', 'seminar', 'workshop', 'professional', 'office', 'team', 'business', 'product'],
    palette: { bg: '#080808', primary: '#ffffff', accent: '#888888', cyan: '#cccccc', text: '#dddddd' },
    generateHeadline: (e) => `${e.eventName}`,
    generateBody: (e) => `${e.hostName ? e.hostName + ' invites you' : 'You\'re invited'} to ${e.eventName}. Simple, straightforward, no fuss. We'd love to have you there.`
  }
];
