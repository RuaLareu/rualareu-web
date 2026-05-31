export const SITE_URL = "https://rualareu.com";

export const CONTACT = {
  address: "Almirante Brown 3071, Piso 2, Mar del Plata (7600), Buenos Aires, Argentina",
  phone: "+54 9 223-697-2421",
  phoneRaw: "+5492236972421",
  email: "info@rualareu.com",
  hours: "08:00 a 17:00",
  whatsappMessage:
    "Hola%2C%20me%20contacto%20desde%20la%20web%20de%20RUA%20%7C%20LAREU.%20Quisiera%20realizar%20una%20consulta.",
  googlePlaceId: "/g/11n57jzt97",
  googleProfileUrl: "https://www.google.com/search?kgmid=/g/11n57jzt97",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneRaw}?text=${CONTACT.whatsappMessage}`;

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  reviewCount: 19,
  profileUrl: "https://g.page/r/CSFHrAdx3y-oEAE/",
};

export const NAV_LINKS = [
  { label: "Estudio", href: "/#estudio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Socios", href: "/#socios" },
  { label: "Publicaciones", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const COLORS = {
  primary: "#314A43",
  primaryLight: "#EDE7D9",
  accent: "#314A43",
  background: "#FAF5EC",
  text: "#1B1B1B",
  textSecondary: "#666666",
  white: "#FFFFFF",
} as const;
