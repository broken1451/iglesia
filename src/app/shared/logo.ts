import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Marca provisoria (cruz sobre círculo) hasta incorporar el logo oficial en SVG. */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
      width: 2.5rem;
      height: 2.5rem;
      flex: none;
    }
  `,
  template: `
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="19" fill="#c9973f" />
      <circle cx="20" cy="20" r="15.5" fill="none" stroke="#0b1f38" stroke-width="1.2" />
      <path d="M18.4 9h3.2v7h6.4v3.2h-6.4V31h-3.2V19.2H12V16h6.4z" fill="#0b1f38" />
    </svg>
  `,
})
export class Logo {}
