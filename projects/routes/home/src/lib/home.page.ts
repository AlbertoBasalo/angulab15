import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>{{ contact.name }}</h3>
    <ul>
      <li><a [href]="contact.twitter">Twitter</a></li>
      <li><a [href]="contact.linkedIn">LinkedIn</a></li>
      <li><a [href]="contact.github">GitHub</a></li>
      <li><a [href]="contact.www">Site</a></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  contact: any = {
    name: 'Alberto Basalo',

    www: 'https://www.albertobasalo.dev',
    github: 'https://github.com/albertobasalo',
    linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
    twitter: 'https://twitter.com/albertobasalo',
  };
}
