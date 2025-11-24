import { FC } from 'react';
import { ShoppingBagIcon, CurrencyDollarIcon, GiftIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Statistic, TeamMember } from '@/types';

// AboutPage component - About us page with story, statistics, and team
export const AboutPage: FC = () => {
  // Statistics data
  const statistics: Statistic[] = [
    {
      id: '1',
      value: '10.5k',
      label: 'Sellers active on our site',
      icon: 'shop',
    },
    {
      id: '2',
      value: '33k',
      label: 'Monthly Product Sale',
      icon: 'dollar',
      highlighted: true,
    },
    {
      id: '3',
      value: '45.5k',
      label: 'Customer active in our site',
      icon: 'bag',
    },
    {
      id: '4',
      value: '25k',
      label: 'Annual gross sale in our site',
      icon: 'gift',
    },
  ];
  
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
      image: 'https://th.bing.com/th/id/R.671c403bf3528b0ef65111beeb9bec07?rik=1wKPyS%2fDu1n0vw&riu=http%3a%2f%2fakns-images.eonline.com%2feol_images%2fEntire_Site%2f201346%2frs_634x1024-130506100754-634.tomcruise.japan.jc.jpg%3fdownsize%3d600%3a*%26crop%3d600%3a600%3bleft%2ctop&ehk=yHLAyFMK9kB5HChxIjg5tZcmbrLyuhUpIpv2jjAvzCU%3d&risl=&pid=ImgRaw&r=0',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      id: '2',
      name: 'Emma Watson',
      role: 'Managing Director',
      image: 'https://preview.redd.it/i1x05636l4c21.jpg?width=1080&crop=smart&auto=webp&s=36db60e6e87a3f7d713729bec2aa6a08ffde5692',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      id: '3',
      name: 'Will Smith',
      role: 'Product Designer',
      image: 'https://tse1.mm.bing.net/th/id/OIP.tOAevqKXmIgq3bg2D9hcrQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
  ];
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-tertiary">
          <a href="/" className="hover:text-black dark:hover:text-dark-text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-black dark:text-dark-text-primary">About</span>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-dark-text-primary">Our Story</h1>
              <div className="space-y-4 text-gray-700 dark:text-dark-text-secondary">
                <p>
                  Launched in 2015, Exclusive is South Asia's premier online shopping
                  marketplace with an active presence in Bangladesh. Supported by wide range
                  of tailored marketing, data and service solutions, Exclusive has 10,500
                  sellers and 300 brands and serves 3 millions customers across the region.
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing at a very fast
                  pace. Exclusive offers a diverse assortment in categories ranging from
                  consumer.
                </p>
              </div>
            </div>
            
            {/* Story Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80"
                alt="Our Story - Shopping Experience"
                className="w-full rounded-lg object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat) => (
              <div
                key={stat.id}
                className={`group relative border-2 rounded-lg p-4 sm:p-6 md:p-8 text-center transition-all hover:shadow-lg ${
                  stat.highlighted
                    ? 'bg-accent dark:bg-dark-accent-primary border-accent dark:border-dark-accent-primary text-white'
                    : 'border-gray-300 dark:border-dark-border-primary hover:bg-accent dark:hover:bg-dark-accent-primary hover:border-accent dark:hover:border-dark-accent-primary hover:text-white'
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${
                    stat.highlighted ? 'bg-white/20' : 'bg-gray-300 group-hover:bg-white/20'
                  }`}>
                    {stat.icon === 'shop' && (
                      <ShoppingBagIcon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${stat.highlighted ? 'text-white' : 'text-black group-hover:text-white'}`} />
                    )}
                    {stat.icon === 'dollar' && (
                      <CurrencyDollarIcon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${stat.highlighted ? 'text-white' : 'text-black group-hover:text-white'}`} />
                    )}
                    {stat.icon === 'bag' && (
                      <ShoppingBagIcon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${stat.highlighted ? 'text-white' : 'text-black group-hover:text-white'}`} />
                    )}
                    {stat.icon === 'gift' && (
                      <GiftIcon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${stat.highlighted ? 'text-white' : 'text-black group-hover:text-white'}`} />
                    )}
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                {/* Member Image */}
                <div className="bg-neutral-100 dark:bg-dark-bg-secondary rounded-lg overflow-hidden mb-6 border border-transparent dark:border-dark-border-primary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Member Info */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-dark-text-primary">{member.name}</h3>
                  <p className="text-gray-600 dark:text-dark-text-tertiary mb-3">{member.role}</p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Signals Section - Same as Homepage */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Delivery */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                {/* Middle ring - brand red */}
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                {/* Inner circle - darker red */}
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
              <p className="text-sm text-gray-600">
                Free delivery for all orders over $140
              </p>
            </div>
            
            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                {/* Middle ring - brand red */}
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                {/* Inner circle - darker red */}
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm text-gray-600">
                Friendly 24/7 customer support
              </p>
            </div>
            
            {/* Money Back Guarantee */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                {/* Middle ring - brand red */}
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                {/* Inner circle - darker red */}
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
              <p className="text-sm text-gray-600">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

