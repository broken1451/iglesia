import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../../shared/icon';
import { LATEST_NEWS, MISSION } from '../home.data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly mission = MISSION;
  protected readonly featured = LATEST_NEWS[0];
}
