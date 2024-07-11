import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
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
}
