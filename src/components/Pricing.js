import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    name: 'Basic',
    price: '$9',
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 50 appointments per month',
      'Basic email notifications',
      'Simple calendar view',
      'Mobile-friendly interface',
    ],
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Ideal for growing businesses with more scheduling needs.',
    features: [
      'Unlimited appointments',
      'Email & SMS notifications',
      'Advanced calendar features',
      'Client management',
      'Custom booking page',
      'Analytics dashboard',
    ],
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations with complex scheduling requirements.',
    features: [
      'Everything in Professional',
      'Multiple staff management',
      'API access',
      'Custom integrations',
      'Priority support',
      'Advanced reporting',
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleGetStarted = (tierName) => {
    // Navigate to login page with the selected plan as state
    navigate('/login', { state: { selectedPlan: tierName } });
  };

  return (
    <div id="pricing" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Select the perfect plan that matches your business needs and scale as you grow.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white transform transition-transform duration-200 hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <button
                  onClick={() => handleGetStarted(tier.name)}
                  className="mt-8 block w-full bg-primary-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Get started with {tier.name}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 