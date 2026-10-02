import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../../shared/icon';
import { MISSION, VALUES, Value } from '../home.data';

@Component({
  selector: 'app-mission',
  imports: [RouterLink, Icon],
  templateUrl: './mission.html',
  styleUrl: './mission.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mission {
  protected readonly mission = MISSION;
  protected readonly values: Value[] = VALUES;
}
