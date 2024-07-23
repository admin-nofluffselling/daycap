import { BillingProviderSchema, createBillingSchema } from '@kit/billing';

// The billing provider to use. This should be set in the environment variables
// and should match the provider in the database. We also add it here so we can validate
// your configuration against the selected provider at build time.
const provider = BillingProviderSchema.parse(
  process.env.NEXT_PUBLIC_BILLING_PROVIDER,
);

export default createBillingSchema({
  // also update config.billing_provider in the DB to match the selected
  provider,
  // products configuration
  products: [
    {
      id: 'free',
      name: 'Free Trial',
      description: 'Free for you, for now.',
      currency: 'USD',
      badge: `Value`,
      plans: [
        {
          name: 'Free Trial',
          id: 'free-trial',
          paymentType: 'recurring',
          interval: 'month',
          custom: true,
          lineItems: [],
        },
      ],
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'The perfect plan to get started',
      currency: 'USD',
      badge: `Value`,
      plans: [
        {
          name: 'Starter Monthly',
          id: 'starter-monthly',
          paymentType: 'recurring',
          interval: 'month',
          lineItems: [
            {
              id: 'price_1NNwYHI1i3VnbZTqI2UzaHIe',
              name: 'Addon 2',
              cost: 9.99,
              type: 'flat' as const,
            },
          ],
        },
        {
          name: 'Starter Yearly',
          id: 'starter-yearly',
          paymentType: 'recurring',
          interval: 'year',
          lineItems: [
            {
              id: 'starter-yearly',
              name: 'Base',
              cost: 99.99,
              type: 'flat' as const,
            },
          ],
        },
      ],
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
  ],
});
