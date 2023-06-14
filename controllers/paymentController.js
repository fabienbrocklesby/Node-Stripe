import paymentService from '../services/paymentService.js';

const createPaymentSession = async (req, res) => {
  try {
    const { price, productName } = req.body;
    const session = await paymentService.createPaymentSession(price, productName);
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating payment session:', error.message);
    res.status(500).json({ error: 'Failed to create payment session' });
  }
};

export default { createPaymentSession };
