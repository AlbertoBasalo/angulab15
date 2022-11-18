import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'www-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <a href="https://github.com/AlbertoBasalo/angulab15">Repo code</a>
    </footer>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Angular 15 Laboratory';
}
