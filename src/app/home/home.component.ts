import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{  

  currentPage = 1;
  itemsPerPage = 4;
  paginatedBlogs: any = [];
  totalPages: number = 0;
  totalPagesArray: number[] = [];

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

  blogs = [
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img2-blog.png'
    },
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img3-blog.png'
    },
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img1-blog.png'
    },
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img4-blog.png'
    },{
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img2-blog.png'
    },
    {
      date: new Date(),
      text: 'n and the financial markets?',
      img: '../../assets/img/img3-blog.png'
    },
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: ''
    },
    {
      date: new Date(),
      text: 'Is there a correlation between bitcoin and the financial markets?',
      img: '../../assets/img/img4-blog.png'
    }
  ]  

  ngOnInit() {
    this.totalPages = Math.ceil(this.blogs.length / this.itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (v, k) => k + 1);
    this.updatePaginatedBlogs();
  }

  updatePaginatedBlogs() {
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
      cardContainer.classList.add('card-leave-active');
      setTimeout(() => {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.paginatedBlogs = this.blogs.slice(startIndex, startIndex + this.itemsPerPage);
        cardContainer.classList.remove('card-leave-active');
        cardContainer.classList.add('card-enter-active');
      }, 500); // La duración de la transición debe ser la misma que en CSS
      setTimeout(() => {
        cardContainer.classList.remove('card-enter-active');
      }, 1000); // El doble de la duración de la transición para limpiar la clase
    }
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedBlogs();
    }
  }
}
