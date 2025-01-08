// slideshow.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, OnDestroy {
  slideIndex: number = 1;
  slides = [
    { src: 'https://cdn.pixabay.com/photo/2024/12/07/13/08/space-9250868_960_720.jpg', caption: 'Caption Text' },
    { src: 'https://cdn.pixabay.com/photo/2024/12/07/13/08/space-9250868_960_720.jpg', caption: 'Caption Two' },
    { src: 'https://cdn.pixabay.com/photo/2024/12/07/13/08/space-9250868_960_720.jpg', caption: 'Caption Three' }
  ];
  slideInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    //  Auto-play functionality
    this.slideInterval = setInterval(() => {
      this.plusSlides(1);
    }, 5000); // Change slide every 5 seconds
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    const totalSlides = this.slides.length;
    if (n > totalSlides) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = totalSlides; }
    // Angular handles the display logic through bindings
  }
}
