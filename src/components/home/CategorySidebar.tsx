import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const categories = [
  "Tech & Accessories",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

/**
 * Category sidebar navigation for homepage
 */
export const CategorySidebar: FC = () => {
  return (
    <aside className="hidden lg:block w-64 border-r border-neutral-200 pr-8">
      <nav className="space-y-3">
        {categories.map((category, index) => {
          const to =
            category === "Tech & Accessories"
              ? "/laptops"
              : category === "Men's Fashion"
              ? "/men-cloth"
              : `/category/${category
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <Link
              key={index}
              to={to}
              className="flex items-center justify-between text-gray-700 hover:text-black transition-colors py-2"
            >
              <span>{category}</span>
              {(category === "Tech & Accessories" ||
                category === "Men's Fashion") && (
                <ArrowRightIcon className="w-4 h-4" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
