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
      id: 'trial',
      name: 'Trial',
      description: 'Try it out',
      currency: 'USD',
      badge: `Value`,
      plans: [
        {
          name: 'Trial',
          id: 'trial',
          paymentType: 'recurring',
          label: 'common:contactUs',
          href: '/contact',
          custom: true,
          interval: 'month',
          lineItems: [],
        },
      ],
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: `Popular`,
      highlighted: true,
      description: 'The perfect plan for professionals',
      currency: 'USD',
      plans: [
        {
          name: 'Pro Monthly',
          id: 'pro-monthly',
          paymentType: 'recurring',
          interval: 'month',
          lineItems: [
            {
              id: 'price_1PGOAVI1i3VnbZTqc69xaypm',
              name: 'Base',
              cost: 19.99,
              type: 'flat',
            },
          ],
        },
        {
          name: 'Pro Yearly',
          id: 'pro-yearly',
          paymentType: 'recurring',
          interval: 'year',
          lineItems: [
            {
              id: 'price_pro_yearly',
              name: 'Base',
              cost: 199.99,
              type: 'flat',
            },
          ],
        },
      ],
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'The perfect plan for enterprises',
      currency: 'USD',
      plans: [
        {
          name: 'Enterprise Monthly',
          id: 'enterprise-monthly',
          paymentType: 'recurring',
          interval: 'month',
          lineItems: [
            {
              id: 'price_enterprise-monthly',
              name: 'Base',
              cost: 29.99,
              type: 'flat',
            },
          ],
        },
        {
          name: 'Enterprise Yearly',
          id: 'enterprise-yearly',
          paymentType: 'recurring',
          interval: 'year',
          lineItems: [
            {
              id: 'price_enterprise_yearly',
              name: 'Base',
              cost: 299.99,
              type: 'flat',
            },
          ],
        },
      ],
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
      ],
    },
  ],
});
