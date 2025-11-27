import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { TIMING } from '@/constants';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  bgColor: string;
  link: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Up to 10% off Voucher',
    subtitle: 'iPhone 17 Series',
    discount: '10%',
    image: 'https://www.bug.hr/img/iphone-18-pro-mogao-bi-dobiti-prozirnu-straznjicu_pBZ54x.jpg',
    bgColor: 'bg-black',
    link: '/products/iphone',
  },
  {
    id: 2,
    title: 'Summer Sale 2024',
    subtitle: 'MacBook Pro M3',
    discount: '15%',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90',
    bgColor: 'bg-gradient-to-r from-gray-900 to-gray-700',
    link: '/products/macbook',
  },
  {
    id: 3,
    title: 'Gaming Week Special',
    subtitle: 'PlayStation 5',
    discount: '20%',
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
    bgColor: 'bg-gradient-to-r from-gray-900 to-neutral-800 dark:from-dark-bg-elevated dark:to-dark-bg-secondary',
    link: '/products/ps5',
  },
  {
    id: 4,
    title: 'Wireless Freedom',
    subtitle: 'AirPods Pro 2',
    discount: '12%',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90',
    bgColor: 'bg-gradient-to-r from-neutral-900 to-gray-800 dark:from-dark-bg-tertiary dark:to-dark-bg-secondary',
    link: '/products/airpods',
  },
  {
    id: 5,
    title: 'Smart Home Deal',
    subtitle: 'Apple Watch Series 9',
    discount: '18%',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR+watch-face-49-ocean-ultra_VW_34FR?wid=1000&hei=1000&fmt=png-alpha',
    bgColor: 'bg-gradient-to-r from-teal-900 to-cyan-800',
    link: '/products/apple-watch',
  },
];

export const HeroCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, TIMING.CAROUSEL_AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <div className="flex-1 relative overflow-hidden rounded-lg">
      {/* Carousel Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselSlides.map((slide) => (
          <div key={slide.id} className={`min-w-full ${slide.bgColor} text-white`}>
            <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 min-h-[400px]">
              <div className="max-w-md mb-8 md:mb-0 z-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 0L25 15H40L28 24L33 40L20 30L7 40L12 24L0 15H15L20 0Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-medium">{slide.subtitle}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{slide.title}</h1>

                {slide.discount && (
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                    <span className="text-2xl font-bold">Save up to {slide.discount}</span>
                  </div>
                )}

                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-2 text-white underline hover:no-underline transition-all group"
                >
                  Shop Now
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-8 h-3 bg-accent rounded-full'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

