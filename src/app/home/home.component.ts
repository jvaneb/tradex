import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  

  imagenes = [
    { url: '../../assets/img/currency-nhd.png', alt: 'Descripción de la imagen 1', title: 'Título de la imagen 1' },
    { url: '../../assets/img/currency-eth.png', alt: 'Descripción de la imagen 2', title: 'Título de la imagen 2' },
    { url: '../../assets/img/currency-copper.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
    { url: '../../assets/img/currency-mcdonalds.png', alt: 'Descripción de la imagen 1', title: 'Título de la imagen 1' },
    { url: '../../assets/img/currency-tesla.png', alt: 'Descripción de la imagen 2', title: 'Título de la imagen 2' },
    { url: '../../assets/img/currency-apple.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
    { url: '../../assets/img/currency-gold.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
  ];

  cards = [
    {
      title: 'Highly regulated & licensed',
      text: 'Authorized and regulated by multintional globally leading regulatory bodies',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    },
    {
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    },
    {
      title: 'Highly regulated & licensed',
      text: 'Authorized and regulated by multintional globally leading regulatory bodies',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    },
    {
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    },
    {
      title: 'Highly regulated & licensed',
      text: 'Authorized and regulated by multintional globally leading regulatory bodies',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    },
    {
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      links: [
        { text: 'Learn More', href: '#' }
      ]
    }
  ];
}
