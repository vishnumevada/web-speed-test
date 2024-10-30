import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-app-speed-test';
  images = [
    { src: '/images/1.png', alt: 'Image 1', caption: 'Caption 1' },
    { src: '/images/2.png', alt: 'Image 2', caption: 'Caption 2' },
    { src: '/images/3.png', alt: 'Image 3', caption: 'Caption 3' },
    { src: '/images/4.png', alt: 'Image 4', caption: 'Caption 4' },
    { src: '/images/5.png', alt: 'Image 5', caption: 'Caption 5' },
    { src: '/images/6.png', alt: 'Image 6', caption: 'Caption 6' },
    { src: '/images/7.png', alt: 'Image 7', caption: 'Caption 7' },
    { src: '/images/8.png', alt: 'Image 8', caption: 'Caption 8' },
    { src: '/images/9.png', alt: 'Image 9', caption: 'Caption 9' },
    { src: '/images/10.png', alt: 'Image 10', caption: 'Caption 10' },
    { src: '/images/1.png', alt: 'Image 11', caption: 'Caption 11' },
    { src: '/images/2.png', alt: 'Image 12', caption: 'Caption 12' },
  ];
}
