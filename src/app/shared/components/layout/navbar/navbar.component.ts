import { Component, AfterViewInit, HostListener  } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  ngOnInit(): void {
    this.onScroll();
  }

  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.onScroll();
  }

  private onScroll(): void {
    const navbar = document.getElementById('navbar');
    if (navbar) {      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const action = scrollTop > navbar.offsetHeight ? 'add' : 'remove';
      navbar.classList[action]('scrolled');
      navbar.classList[action === 'add' ? 'remove' : 'add']('transparent');
    }
  }
}