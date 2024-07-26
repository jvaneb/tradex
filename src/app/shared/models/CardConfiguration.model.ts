export interface Link {
  text: string;
  href: string;
}

export interface Card {
  title: string;
  text: string[];
  links: Link[];
  cardClass: string;
  textClass: string;
  textStyle: { [key: string]: string };
  cardStyle: { [key: string]: string };
  date: Date;
  img: string;
}

export interface CardConfiguration {
  id: number;
  cards: Card[];
  currentPage: number;
  itemsPerPage: number;
  paginatedCards: Card[];
  totalPages: number;
}