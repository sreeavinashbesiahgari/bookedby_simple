import React from 'react';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Easy Scheduling',
    description: 'Book appointments with just a few clicks. Our intuitive interface makes scheduling simple and efficient.',
    icon: CalendarIcon,
  },
  {
    name: 'Time Management',
    description: 'Optimize your time with smart scheduling tools and automated availability management.',
    icon: ClockIcon,
  },
  {
    name: 'Client Management',
    description: 'Keep track of your clients and their appointment history in one centralized dashboard.',
    icon: UserGroupIcon,
  },
  {
    name: 'Smart Reminders',
    description: 'Reduce no-shows with automated email and SMS reminders to your clients.',
    icon: BellIcon,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage appointments
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools you need to streamline your booking process and manage your schedule effectively.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 