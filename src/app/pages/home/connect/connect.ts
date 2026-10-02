import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../../../shared/icon';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../../../shared/site.data';

@Component({
  selector: 'app-connect',
  imports: [Icon],
  templateUrl: './connect.html',
  styleUrl: './connect.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Connect {
  protected readonly email = CONTACT_EMAIL;
  protected readonly social = SOCIAL_LINKS;
}
