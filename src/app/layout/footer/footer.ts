import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../shared/icon';
import { Logo } from '../../shared/logo';
import { CONTACT_EMAIL, MAIN_NAV, ORG_NAME, SOCIAL_LINKS } from '../../shared/site.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly orgName = ORG_NAME;
  protected readonly email = CONTACT_EMAIL;
  protected readonly social = SOCIAL_LINKS;
  protected readonly sections = MAIN_NAV.filter((item) => item.children);
  protected readonly year = new Date().getFullYear();
}
