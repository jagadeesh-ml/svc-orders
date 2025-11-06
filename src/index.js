import express from 'express';
const app = express();

app.get('/healthz', (_req, res) => {
  res.json({ service: 'orders', status: 'running' });
});

app.get('/', (_req, res) => {
  res.send('orders service');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`orders listening on ${PORT}`);
});
// trigger multi-arch
// retrigger
