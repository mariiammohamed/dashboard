import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent {
  cards = [
    { enrolled: 16, recentlyEnrolled: 16, coursesLeft: 8, progress: 68 },
    { enrolled: 20, recentlyEnrolled: 15, coursesLeft: 10, progress: 50 },
    { enrolled: 12, recentlyEnrolled: 2, coursesLeft: 6, progress: 75 }
  ];
}
