import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-items',
  standalone: true,
  imports: [],
  templateUrl: './trending-items.component.html',
  styleUrl: './trending-items.component.scss'
})
export class TrendingItemsComponent {
  trendingItems = [
    { name: 'Course Name', image: '../../../assets/course.svg' , number:54 },
    { name: 'Book Name', image: '../../../assets/reading.svg',number:94 },
    { name: 'Reading Name', image: '../../../assets/book.svg' ,number:64  },
    { name: 'Book Name', image: '../../../assets/course2.svg' ,number:74 },
    { name: 'Course Name', image: '../../../assets/course3.svg' ,number:59},
    { name: 'Course Name', image: '../../../assets/course4.svg' ,number:52},
    { name: 'Course Name', image: '../../../assets/course6.svg' ,number:56 },
  ];
}
