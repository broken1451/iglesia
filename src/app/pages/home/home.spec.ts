import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';
import { LATEST_NEWS, QUICK_LINKS, VALUES } from './home.data';

describe('Home', () => {
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should render the hero title', () => {
    expect(compiled.querySelector('h1')?.textContent).toContain('Reino de Dios');
  });

  it('should render every quick link, value and news item', () => {
    expect(compiled.querySelectorAll('app-quick-access .card').length).toBe(QUICK_LINKS.length);
    expect(compiled.querySelectorAll('app-mission .values li').length).toBe(VALUES.length);
    expect(compiled.querySelectorAll('app-news .card').length).toBe(LATEST_NEWS.length);
  });

  it('should open external links in a new tab', () => {
    const itbn = compiled.querySelector<HTMLAnchorElement>('a[href="https://www.itbn.cl"]');
    expect(itbn?.target).toBe('_blank');
    expect(itbn?.rel).toContain('noopener');
  });
});
