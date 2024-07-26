import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CardComponent } from '../shared/components/card/card.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { CardConfiguration } from '../shared/models/CardConfiguration.model';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent, PaginationComponent, BreadcrumbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{  

  cardTwoColumns: CardConfiguration = {
    id: 1,
    cards: [
      {
        title: 'Highly regulated & licensed',
        text: ['Authorized and regulated by multintional globally leading regulatory bodies'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'No surprises',
        text: ['Transparent pricing','Low spreads 300:1 leverage'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: '24/5 live customer support',
        text: ['Our multilingual team is always ready to help you.'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Instant deposit & withdrawal',
        text: ['No Deposit or Withdrawal Fees Some banks or payment providers '],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'End-to-end security',
        text: ['100% data encryption protection. Segregated from the Companys funds.'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Unparallel trading conditions',
        text: ['Transparent trading with Depth of Market (DoM) on MT5.'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: { 'width': 'auto' },
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
    ],
    currentPage: 1,
    itemsPerPage: 4,
    paginatedCards: [],
    totalPages: 0
  };

  cardFourColumnsBlogPaginated: CardConfiguration = {
    id: 1,
    cards: [
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 1'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img2-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 2'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img3-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 3'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img1-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 4'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img4-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 5'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img3-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 6'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img1-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 7'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img2-blog.png'
      },
      {
        title: '',
        text: ['Is there a correlation between bitcoin and the financial markets? 8'],
        links: [],
        cardClass: '',
        textClass: '',
        textStyle: {},
        cardStyle: {},
        date: new Date(),
        img: '../../assets/img/img4-blog.png'
      }
    ],
    currentPage: 1,
    itemsPerPage: 4,
    paginatedCards: [],
    totalPages: 0
  };

  cardFourColumnsPaginated: CardConfiguration = {
    id: 1,
    cards: [
      {
        title: 'Trade 1',
        text: ['Trade over 130 crypto,  Forex & Commodity 1'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Stake 2',
        text: ['Take $GNS and earn real yeild 2'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Vault 3',
        text: ['Lend $DAI, $USDC or $WETH & earn real yeild 3'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Crypto 4',
        text: ['Step by step on ramp 4'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Trade 5',
        text: ['Trade over 130 crypto,  Forex & Commodity 5'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Stake 6',
        text: ['Take $GNS and earn real yeild 6'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Vault 7',
        text: ['Lend $DAI, $USDC or $WETH & earn real yeild 7'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      },
      {
        title: 'Crypto 8',
        text: ['Step by step on ramp 8'],
        links: [
          { text: 'Learn More', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/img-card.png'
      }
    ],
    currentPage: 1,
    itemsPerPage: 4,
    paginatedCards: [],
    totalPages: 0
  };

  imagenes = [
    { url: '../../assets/img/currency-nhd.png', alt: 'Descripción de la imagen 1', title: 'Título de la imagen 1' },
    { url: '../../assets/img/currency-eth.png', alt: 'Descripción de la imagen 2', title: 'Título de la imagen 2' },
    { url: '../../assets/img/currency-copper.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
    { url: '../../assets/img/currency-mcdonalds.png', alt: 'Descripción de la imagen 1', title: 'Título de la imagen 1' },
    { url: '../../assets/img/currency-tesla.png', alt: 'Descripción de la imagen 2', title: 'Título de la imagen 2' },
    { url: '../../assets/img/currency-apple.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
    { url: '../../assets/img/currency-gold.png', alt: 'Descripción de la imagen 3', title: 'Título de la imagen 3' },
  ];

  ngOnInit() {
    this.updateTotalPagesPagination(this.cardFourColumnsBlogPaginated);    
    this.updateTotalPagesPagination(this.cardFourColumnsPaginated);    
  }

  updateTotalPagesPagination(cardConfiguration: CardConfiguration){
    cardConfiguration.totalPages = Math.ceil(cardConfiguration.cards.length / cardConfiguration.itemsPerPage);

    this.updatePaginatedCards(cardConfiguration);
  }

  updatePaginatedCards(cardConfiguration: CardConfiguration){
    const startIndex = (cardConfiguration.currentPage - 1) * cardConfiguration.itemsPerPage;
    cardConfiguration.paginatedCards = cardConfiguration.cards.slice(startIndex, startIndex + cardConfiguration.itemsPerPage);
  }

  onPageChangedCards(page: number, cardConfiguration: CardConfiguration) {
    cardConfiguration.currentPage = page;
    this.updatePaginatedCards(cardConfiguration);
  }
}
