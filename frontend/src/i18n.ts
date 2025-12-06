import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      nav: {
        home: "Home",
        tech: "Tech & Accessories",
        contact: "Contact",
        about: "About",
        signup: "Sign Up",
      },
      promo:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      language: {
        english: "English",
        arabic: "Arabic",
      },
      buttons: {
        addToCart: "Add To Cart",
        viewAllProducts: "View All Products",
        viewAll: "View All",
        buyNow: "Buy Now!",
        backToHome: "Back to Home",
      },
      relatedItem: "Related Item",
      product: {
        loading: "Loading product...",
        notFound: "Product Not Found",
        notFoundDesc: "The product you're looking for doesn't exist.",
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        related: "More from {{category}}",
      },
    },
  },
  ar: {
    common: {
      nav: {
        home: "الرئيسية",
        tech: "التقنية والإكسسوارات",
        contact: "اتصل",
        about: "من نحن",
        signup: "إنشاء حساب",
      },
      promo:
        "تخفيضات الصيف على جميع ملابس السباحة وتوصيل سريع مجاني - خصم 50%!",
      language: {
        english: "الإنجليزية",
        arabic: "العربية",
      },
      buttons: {
        addToCart: "أضف إلى السلة",
        viewAllProducts: "عرض جميع المنتجات",
        viewAll: "عرض الكل",
        buyNow: "اشتر الآن!",
        backToHome: "العودة للرئيسية",
      },
      relatedItem: "منتجات ذات صلة",
      product: {
        loading: "جارٍ تحميل المنتج...",
        notFound: "المنتج غير موجود",
        notFoundDesc: "المنتج الذي تبحث عنه غير متوفر.",
        inStock: "متوفر",
        outOfStock: "غير متوفر",
        related: "المزيد من {{category}}",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng:
    typeof document !== "undefined"
      ? document.documentElement.lang || "en"
      : "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
