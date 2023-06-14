import 'dotenv/config';

import express from 'express';
import paymentController from './controllers/paymentController.js';

const port = 3000;

const app = express();

app.use(express.json());

app.post('/payment', paymentController.createPaymentSession);
app.get('/payment/success', (req, res) => { res.json({ message: 'Payment successful' }) });
app.get('/payment/cancel', (req, res) => { res.json({ message: 'Payment cancelled' }) });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
