import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'www-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Angular 15 Laboratory';
}
