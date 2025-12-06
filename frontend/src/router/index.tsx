import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RootLayout } from "@/components/layout/RootLayout";
import { PageLoader } from "@/components/ui/PageLoader";

// Eager load critical pages
import { HomePage } from "@/pages/HomePage";

// Lazy load all other pages to reduce initial bundle
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const CartPage = lazy(() =>
  import("@/pages/CartPage").then((m) => ({ default: m.CartPage }))
);
const CheckoutPage = lazy(() =>
  import("@/pages/CheckoutPage").then((m) => ({ default: m.CheckoutPage }))
);
const ProductDetailPage = lazy(() =>
  import("@/pages/ProductDetailPage").then((m) => ({
    default: m.ProductDetailPage,
  }))
);
const MyProfilePage = lazy(() =>
  import("@/pages/MyProfilePage").then((m) => ({ default: m.MyProfilePage }))
);
const EditProfilePage = lazy(() =>
  import("@/pages/EditProfilePage").then((m) => ({
    default: m.EditProfilePage,
  }))
);
const OrdersPage = lazy(() =>
  import("@/pages/OrdersPage").then((m) => ({ default: m.OrdersPage }))
);
const SignInPage = lazy(() =>
  import("@/pages/SignInPage").then((m) => ({ default: m.SignInPage }))
);
const SignUpPage = lazy(() =>
  import("@/pages/SignUpPage").then((m) => ({ default: m.SignUpPage }))
);
const WishlistPage = lazy(() =>
  import("@/pages/WishlistPage").then((m) => ({ default: m.WishlistPage }))
);
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const ProductsPage = lazy(() =>
  import("@/pages/ProductsPage").then((m) => ({ default: m.ProductsPage }))
);
const TechComp = lazy(() =>
  import("@/pages/TechComp").then((m) => ({ default: m.TechComp }))
);
const TechAcc = lazy(() =>
  import("@/pages/TechAcc").then((m) => ({ default: m.TechAcc }))
);

// Loading fallback component
const PageLoadingFallback = () => <PageLoader message="Loading page..." />;

// Create browser router with all routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <CheckoutPage />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <MyProfilePage />
          </Suspense>
        ),
      },
      {
        path: "profile/edit",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <EditProfilePage />
          </Suspense>
        ),
      },
      {
        path: "signin",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <SignInPage />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <OrdersPage />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <WishlistPage />
          </Suspense>
        ),
      },
      {
        path: "laptops",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <TechComp />
          </Suspense>
        ),
      },
      {
        path: "smartphones",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <TechComp />
          </Suspense>
        ),
      },
      {
        path: "women-cloth",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <TechAcc />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
