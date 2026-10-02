import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Icon } from '../../../shared/icon';
import { QUICK_LINKS, QuickLink } from '../home.data';

@Component({
  selector: 'app-quick-access',
  imports: [RouterLink, NgTemplateOutlet, Icon],
  templateUrl: './quick-access.html',
  styleUrl: './quick-access.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickAccess {
  protected readonly links: QuickLink[] = QUICK_LINKS;
}
