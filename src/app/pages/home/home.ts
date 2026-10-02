import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Connect } from './connect/connect';
import { Hero } from './hero/hero';
import { Mission } from './mission/mission';
import { News } from './news/news';
import { QuickAccess } from './quick-access/quick-access';

@Component({
  selector: 'app-home',
  imports: [Hero, QuickAccess, Mission, News, Connect],
  template: `
    <app-hero />
    <app-quick-access />
    <app-mission />
    <app-news />
    <app-connect />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
