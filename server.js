require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── DATA STORAGE ──────────────────────────────────────────────────────────────
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

function loadEvent(eventId) {
  const file = path.join(DATA_DIR, `${eventId}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

function saveEvent(eventId, data) {
  fs.writeFileSync(path.join(DATA_DIR, `${eventId}.json`), JSON.stringify(data, null, 2));
}

function generateEventId() {
  return Math.random().toString(36).substring(2, 8);
}

// ── THEME ENGINE ──────────────────────────────────────────────────────────────
const { generateThemes } = require('./themeGenerator');

// ── ROUTES ────────────────────────────────────────────────────────────────────

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Generate themes from form submission
app.post('/api/generate', async (req, res) => {
  const { eventName, hostName, date, time, venue, description } = req.body;
  if (!eventName || !date || !venue) {
    return res.status(400).json({ error: 'Event name, date and venue are required' });
  }

  const eventId = generateEventId();
  const eventData = { eventId, eventName, hostName, date, time, venue, description, rsvps: [], createdAt: new Date() };
  saveEvent(eventId, eventData);

  const generatedThemes = await generateThemes(eventData);
  res.json({ eventId, themes: generatedThemes });
});

// Save selected theme and go live
app.post('/api/select-theme', (req, res) => {
  const { eventId, themeId } = req.body;
  const event = loadEvent(eventId);
  if (!event) return res.status(404).json({ error: 'Event not found' });

  event.selectedTheme = themeId;
  saveEvent(eventId, event);
  res.json({ inviteUrl: `/invite/${eventId}`, dashboardUrl: `/dashboard/${eventId}` });
});

// Guest invite page
app.get('/invite/:eventId', (req, res) => {
  const event = loadEvent(req.params.eventId);
  if (!event) return res.status(404).send('Invite not found');
  res.sendFile(path.join(__dirname, 'public', 'invite.html'));
});

// Get event data for invite page
app.get('/api/event/:eventId', async (req, res) => {
  const event = loadEvent(req.params.eventId);
  if (!event) return res.status(404).json({ error: 'Not found' });
  const allThemes = await generateThemes(event);
  const theme = allThemes.find(t => t.id === event.selectedTheme) || allThemes[0];
  res.json({ ...event, theme });
});

// Submit RSVP
app.post('/api/rsvp/:eventId', (req, res) => {
  const event = loadEvent(req.params.eventId);
  if (!event) return res.status(404).json({ error: 'Not found' });

  const { name, status, adults, kids, food, notes } = req.body;
  const existing = event.rsvps.findIndex(r => r.name.toLowerCase() === name.toLowerCase());
  const record = { name, status, adults, kids, food, notes, timestamp: new Date() };

  if (existing !== -1) event.rsvps[existing] = record;
  else event.rsvps.push(record);

  saveEvent(event.eventId, event);
  res.json({ success: true });
});

// Dashboard
app.get('/dashboard/:eventId', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Get RSVPs for dashboard
app.get('/api/dashboard/:eventId', (req, res) => {
  const event = loadEvent(req.params.eventId);
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json(event);
});

// Get themes for an event (supports ?exclude= to skip already-seen themes)
app.get('/api/themes/:eventId', async (req, res) => {
  const event = loadEvent(req.params.eventId);
  if (!event) return res.status(404).json({ error: 'Not found' });
  const exclude = (req.query.exclude || '').split(',').filter(Boolean);
  const generated = await generateThemes(event, exclude);
  res.json({ themes: generated });
});

// Preview page
app.get('/preview/:eventId', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'preview.html'));
});

// Success page
app.get('/success/:eventId', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

app.listen(PORT, () => console.log(`Rsvply running on port ${PORT}`));
