import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Convención Bautista Nacional de Chile' },
  // Las demás secciones (iglesias, pastores, noticias…) se migrarán en próximos PR.
  { path: '**', redirectTo: '' },
];
