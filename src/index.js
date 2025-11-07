import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;
const SERVICE = process.env.SERVICE_NAME || 'unknown';

// Simple root for quick checks
app.get('/', (_req, res) => {
  res.status(200).send(`${SERVICE} service`);
});

// Consistent JSON health
app.get('/healthz', (_req, res) => {
  res.status(200).json({ service: SERVICE, status: 'running' });
});

app.listen(PORT, () => {
  console.log(`${SERVICE} listening on ${PORT}`);
});
