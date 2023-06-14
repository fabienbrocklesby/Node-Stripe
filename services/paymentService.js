import stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeClient = new stripe(stripeSecretKey);

const createPaymentSession = async (price, productName) => {
  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: productName,
            },
            unit_amount: price * 100, // Stripe accepts amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/payment/success',
      cancel_url: 'http://localhost:3000/payment/cancel',
    });
    return session;
  } catch (error) {
    throw new Error('Failed to create payment session');
  }
};

export default { createPaymentSession };
