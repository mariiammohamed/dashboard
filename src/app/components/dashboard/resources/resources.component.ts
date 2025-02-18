import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent {
  resources = [
    { name: "Course Name", progress: 65, color: "#007bff"},
    { name: "Book Name", progress: 44, color: "#ff0050" },
    { name: "Reading Name", progress: 27, color: "#00c96b" },
    { name: "Course Name", progress: 68, color: "#ff9800" },
    { name: "Course Name", progress: 29, color: "#00c2ff" },
    { name: "Course Name", progress: 58, color: "#7b1fa2" },
    { name: "Course Name", progress: 44, color: "#ff0050" },
  ];


}
