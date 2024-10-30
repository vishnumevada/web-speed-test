import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  placeholders = Array(8);
  images1: any;

  images = [
    { id: 1, src: '/images/1.png', alt: 'Image 1', caption: 'Caption 1' },
    { id: 2, src: '/images/2.png', alt: 'Image 2', caption: 'Caption 2' },
    { id: 3, src: '/images/3.png', alt: 'Image 3', caption: 'Caption 3' },
    { id: 4, src: '/images/4.png', alt: 'Image 4', caption: 'Caption 4' },
    { id: 5, src: '/images/5.png', alt: 'Image 5', caption: 'Caption 5' },
    { id: 6, src: '/images/6.png', alt: 'Image 6', caption: 'Caption 6' },
    { id: 7, src: '/images/7.png', alt: 'Image 7', caption: 'Caption 7' },
    { id: 8, src: '/images/8.png', alt: 'Image 8', caption: 'Caption 8' },
  ];

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Dynamic Page Title');
    this.meta.updateTag({
      name: 'description',
      content: 'A brief and engaging description of your website content.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'keyword1, keyword2, keyword3, etc.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Dynamic Open Graph title',
    });

    setTimeout(() => {
      this.images1 = [
        { id: 1, src: '/images/1.avif', alt: 'Image 1', caption: 'Caption 1' },
        { id: 2, src: '/images/2.avif', alt: 'Image 2', caption: 'Caption 2' },
        { id: 3, src: '/images/3.avif', alt: 'Image 3', caption: 'Caption 3' },
        { id: 4, src: '/images/4.avif', alt: 'Image 4', caption: 'Caption 4' },
        { id: 5, src: '/images/5.avif', alt: 'Image 5', caption: 'Caption 5' },
        { id: 6, src: '/images/6.avif', alt: 'Image 6', caption: 'Caption 6' },
        { id: 7, src: '/images/7.avif', alt: 'Image 7', caption: 'Caption 7' },
        { id: 8, src: '/images/8.avif', alt: 'Image 8', caption: 'Caption 8' },
      ];
    }, 500);
  }
}
