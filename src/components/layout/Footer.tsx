import { FC } from "react";
import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const Footer: FC = () => {
  return (
    <footer className="bg-black dark:bg-dark-bg-primary text-white transition-colors duration-300 border-t border-neutral-800 dark:border-dark-border-primary">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="text-sm mb-4">Subscribe</p>
            <p className="text-sm text-gray-400 mb-4">
              Get 10% off your first order
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white dark:border-dark-border-primary rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder-gray-400 dark:placeholder-dark-text-muted focus:outline-none focus:border-accent dark:focus:border-dark-accent-primary transition-all duration-300 focus:ring-2 focus:ring-accent/20 dark:focus:ring-dark-accent-primary/20"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-accent dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-110"
                aria-label="Subscribe"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white dark:text-dark-text-primary">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 dark:text-dark-text-tertiary">
              <li>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white dark:text-dark-text-primary">
              Account
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/profile"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Login / Register
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white dark:text-dark-text-primary">
              Quick Link
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 dark:text-dark-text-tertiary hover:text-white dark:hover:text-dark-accent-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white dark:text-dark-text-primary">
              Download App
            </h4>
            <p className="text-xs text-gray-400 dark:text-dark-text-tertiary mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex gap-3 mb-4">
              <div className="w-20 h-20 bg-white dark:bg-dark-bg-secondary rounded-lg flex items-center justify-center border-2 border-gray-300 dark:border-dark-border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg p-2">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[2px]">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        [0, 2, 4, 6, 8].includes(i)
                          ? "bg-black dark:bg-white"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black dark:bg-dark-bg-tertiary border border-gray-600 dark:border-dark-border-primary rounded-lg px-3 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-900 dark:hover:bg-dark-bg-secondary hover:shadow-lg group"
                  aria-label="Download on Google Play"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
                        fill="currentColor"
                        className="text-white group-hover:text-accent dark:group-hover:text-dark-accent-primary transition-colors"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-[8px] text-gray-400 dark:text-dark-text-tertiary uppercase leading-none">
                        GET IT ON
                      </span>
                      <span className="text-xs text-white dark:text-dark-text-primary font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.apple.com/app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black dark:bg-dark-bg-tertiary border border-gray-600 dark:border-dark-border-primary rounded-lg px-3 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-900 dark:hover:bg-dark-bg-secondary hover:shadow-lg group"
                  aria-label="Download on the App Store"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                        className="text-white group-hover:text-accent dark:group-hover:text-dark-accent-primary transition-colors"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-[8px] text-gray-400 dark:text-dark-text-tertiary uppercase leading-none">
                        Download on the
                      </span>
                      <span className="text-xs text-white dark:text-dark-text-primary font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-accent dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-125"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-accent dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-125"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-accent dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-125"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-accent dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 dark:border-dark-border-primary py-4 bg-black/50 dark:bg-dark-bg-secondary/50">
        <div className="container-custom">
          <p className="text-center text-sm text-gray-500 dark:text-dark-text-muted">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
