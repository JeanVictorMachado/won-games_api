import AuthLogo from "./extensions/logo-won.svg";
import favicon from "./extensions/favicon.png";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["en"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: favicon,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
    // // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Won Games",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Welcome to Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your Won Games account",
      },
    },
  },

  bootstrap() {},
};
