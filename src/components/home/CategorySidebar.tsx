import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

/**
 * Category sidebar navigation for homepage
 */
export const CategorySidebar: FC = () => {
  return (
    <aside className="hidden lg:block w-64 border-r border-neutral-200 pr-8">
      <nav className="space-y-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="flex items-center justify-between text-gray-700 hover:text-black transition-colors py-2"
          >
            <span>{category}</span>
            {(category === "Woman's Fashion" || category === "Men's Fashion") && (
              <ArrowRightIcon className="w-4 h-4" />
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

