import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardConfiguration } from '../shared/models/CardConfiguration.model';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-markets',
  standalone: true,
  imports: [CommonModule, CardComponent, PaginationComponent, BreadcrumbComponent],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.css'
})
export class MarketsComponent {
  
  cardFourColumnsPaginated: CardConfiguration = {
    id: 1,
    cards: [
      {
        title: 'EUR/USD 1',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 2',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 3',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 4',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 5',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 6',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 7',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 8',
        text: ['1.08450   /   0.23%'],
        links: [
          { text: 'Trade', href: '#' }
        ],
        cardClass: 'card-personalized',
        textClass: 'txt',
        textStyle: { 'width': 'auto', 'height': '60px' },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
    ],
    currentPage: 1,
    itemsPerPage: 4,
    paginatedCards: [],
    totalPages: 0
  };

  table = {
    data: [
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-red.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-red.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-blue.png'

      },
      {
        assest: 'EUR/TRY',
        sell: '33.64934',
        buy: '33.72342',
        change: '0.07 %',
        img: '../../../../assets/img/img-mini-chart-red.png'

      },
    ]
  }

  currencyPagination: CardConfiguration = {
    id: 1,
    cards: [
      {
        title: 'AUD/USD 1',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'USD/JPY 2',
        text: ['0.7'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 3',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'GBP/USD 4',
        text: ['0.9'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'AUD/USD 5',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'USD/JPY 6',
        text: ['0.7'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 7',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'GBP/USD 8',
        text: ['0.9'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },   
      {
        title: 'GBP/USD 9',
        text: ['0.9'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'AUD/USD 10',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'USD/JPY 11',
        text: ['0.7'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      },
      {
        title: 'EUR/USD 12',
        text: ['0.6'],
        links: [
          { text: '', href: '' }
        ],
        cardClass: '',
        textClass: '',
        textStyle: { },
        cardStyle: {},
        date: new Date(),
        img: '../../../../assets/img/eur-usd.png'
      }   
    ],
    currentPage: 1,
    itemsPerPage: 6,
    paginatedCards: [],
    totalPages: 0
  }

  ngOnInit() {
    this.updateTotalPagesPagination(this.cardFourColumnsPaginated);    
    this.updateTotalPagesPagination(this.currencyPagination);  
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

  prueba() {
    alert('entro')
  }
}
