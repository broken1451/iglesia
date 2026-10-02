import { IconName } from '../../shared/icon';

export interface QuickLink {
  title: string;
  description: string;
  icon: IconName;
  path?: string;
  href?: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface NewsItem {
  title: string;
  category: string;
  path: string;
}

export const MISSION =
  'Participar en la extensión del Reino de Dios por medio del apoyo, servicio, capacitación, ' +
  'trabajo y ministerio de las iglesias de la Convención Bautista Nacional de Chile.';

export const QUICK_LINKS: QuickLink[] = [
  {
    title: 'Iglesias',
    description: 'Encuentra una congregación de la Convención cerca de ti.',
    icon: 'church',
    path: '/iglesias',
  },
  {
    title: 'Pastores',
    description: 'Conoce a quienes guían y sirven a nuestras iglesias.',
    icon: 'users',
    path: '/pastores',
  },
  {
    title: 'Misioneros',
    description: 'Obreros que llevan el Evangelio a nuevos lugares.',
    icon: 'globe',
    path: '/misioneros',
  },
  {
    title: 'Encargados de obra',
    description: 'Servidores a cargo de obras y nuevas plantaciones.',
    icon: 'hands',
    path: '/encargados-obra',
  },
  {
    title: 'Multimedia',
    description: 'Fotos y videos de nuestras actividades.',
    icon: 'image',
    path: '/galeria',
  },
  {
    title: 'ITBN',
    description: 'Instituto Teológico Bautista Nacional.',
    icon: 'graduation',
    href: 'https://www.itbn.cl',
  },
];

// Principios descritos en https://www.convencionbautista.cl/qsomos
export const VALUES: Value[] = [
  {
    title: 'Señorío de Cristo',
    description: 'Principio rector de nuestra fe y piedra angular de la doctrina bíblica.',
  },
  {
    title: 'Inspiración de la Biblia',
    description: 'Reconocemos la autoridad de las Escrituras como revelación de Dios.',
  },
  {
    title: 'Membresía regenerada',
    description: 'La iglesia es la asamblea de creyentes que han manifestado su fe en el bautismo.',
  },
  {
    title: 'Democracia y autonomía',
    description: 'Todos los miembros comparten las mismas responsabilidades y privilegios.',
  },
  {
    title: 'Gracia y misericordia',
    description: 'Expresadas en la salvación y en la acción social hacia los necesitados.',
  },
  {
    title: 'Colaboración',
    description: 'Iglesias autónomas que trabajan juntas en interdependencia.',
  },
];

// Últimas noticias publicadas en el sitio actual. Reemplazar por datos del CMS/API cuando exista.
export const LATEST_NEWS: NewsItem[] = [
  { title: 'Congreso de Misiones 2026', category: 'Misiones', path: '/noticias' },
  {
    title: 'Información oficial sobre cambios administrativos',
    category: 'Comunicado',
    path: '/noticias',
  },
  { title: 'Unánimes a una oración', category: 'Oración', path: '/noticias' },
  {
    title: 'Biografía de José Domingo Fierro Neculhueque',
    category: 'Biografía',
    path: '/noticias',
  },
  {
    title: 'Biografía del pastor Germán Durán Valdebenito',
    category: 'Biografía',
    path: '/noticias',
  },
  { title: 'Comunicado oficial a las iglesias', category: 'Comunicado', path: '/noticias' },
];
