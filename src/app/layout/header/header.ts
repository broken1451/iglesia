import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Icon } from '../../shared/icon';
import { Logo } from '../../shared/logo';
import { MAIL_LINKS, MAIN_NAV, NavLink } from '../../shared/site.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly nav: NavLink[] = MAIN_NAV;
  protected readonly mail: NavLink[] = MAIL_LINKS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
