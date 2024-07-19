import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardConfiguration } from '../shared/models/CardConfiguration.model';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-markets',
  standalone: true,
  imports: [CommonModule, CardComponent, PaginationComponent],
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

  ngOnInit() {
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
