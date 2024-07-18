import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() text: string = '';
  @Input() links: { text: string, href: string }[] = [];
  @Input() cardClass: string = '';
  @Input() titleClass: string = '';
  @Input() textClass: string = '';
  @Input() cardStyle: { [key: string]: string } = {};
  @Input() titleStyle: { [key: string]: string } = {};
  @Input() textStyle: { [key: string]: string } = {};

  constructor() {
    this.cardStyle = this.cardStyle || {};
    this.titleStyle = this.titleStyle || {};
    // this.subtitleStyle = this.subtitleStyle || {};
    this.textStyle = this.textStyle || {};
  }

  ngOnChanges() {
    this.cardStyle = this.cardStyle || {};
    this.titleStyle = this.titleStyle || {};
    // this.subtitleStyle = this.subtitleStyle || {};
    this.textStyle = this.textStyle || {};
  }
}
