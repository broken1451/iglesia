import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../../shared/icon';
import { LATEST_NEWS, NewsItem } from '../home.data';

@Component({
  selector: 'app-news',
  imports: [RouterLink, Icon],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {
  protected readonly news: NewsItem[] = LATEST_NEWS;
}
