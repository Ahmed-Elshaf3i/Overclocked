import { FC } from 'react';
import {
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

/**
 * Trust signals section showing delivery, support, and guarantee
 */
export const TrustSignals: FC = () => {
  const signals = [
    {
      icon: TruckIcon,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: ShieldCheckIcon,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <signal.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">
                {signal.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-tertiary">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

