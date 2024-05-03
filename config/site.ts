export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rano Cake",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Belanja",
      href: "/Belanja",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "login",
      href: "/login",
    },
  ],
  navMenuItems: [
    {
      label: "Belanja",
      href: "/Belanja",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    google: "https://maps.app.goo.gl/HtPfUzFQtjqnQHRV8",
    sponsor: "login",
    login: 'login',
  },
};
