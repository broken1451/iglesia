// Contenido del sitio tomado de https://www.convencionbautista.cl/
// Centralizado aquí para que encabezado, inicio y pie de página compartan la misma fuente.

export interface NavLink {
  label: string;
  path?: string;
  href?: string;
  children?: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram';
}

export const ORG_NAME = 'Convención Bautista Nacional de Chile';
export const CONTACT_EMAIL = 'relaciones_publicas@convencionbautista.cl';

export const MAIN_NAV: NavLink[] = [
  { label: 'Inicio', path: '/' },
  {
    label: 'Acerca de',
    children: [
      { label: '¿Quiénes somos?', path: '/qsomos' },
      { label: 'Nuestra organización', path: '/directiva' },
    ],
  },
  { label: 'Iglesias', path: '/iglesias' },
  {
    label: 'Servidores',
    children: [
      { label: 'Pastores', path: '/pastores' },
      { label: 'Encargados de obra', path: '/encargados-obra' },
      { label: 'Misioneros', path: '/misioneros' },
    ],
  },
  {
    label: 'Noticias',
    children: [
      { label: 'Actividades de las ramas', path: '/actividades-ramas' },
      { label: 'Actividades de departamentos', path: '/actividades-departamentos' },
      { label: 'Noticias generales', path: '/noticias' },
    ],
  },
  { label: 'Multimedia', path: '/galeria' },
  { label: 'ITBN', href: 'https://www.itbn.cl' },
];

export const MAIL_LINKS: NavLink[] = [
  { label: 'Gmail', href: 'https://mail.google.com/' },
  { label: 'Webmail', href: 'https://www.convencionbautista.cl:2096/' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/amigosbautistadechile',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/convencion_bautista_nacional/',
    icon: 'instagram',
  },
];
