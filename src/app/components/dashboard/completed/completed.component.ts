import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    const ctx = document.getElementById('completionChart') as HTMLCanvasElement;

    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Yearly',
            data: [40, 50, 50, 50, 55, 50, 50, 55, 50],
            backgroundColor: 'rgba(255, 210, 0, 1)',
            borderRadius: 5
          },
          {
            label: 'Monthly',
            data: [70, 85, 90, 85, 80, 90, 80, 95, 80],
            backgroundColor: 'rgba(0, 195, 255, 1)',
            borderRadius: 5
          },
          {
            label: 'Weekly',
            data: [30, 35, 30, 20, 30, 40, 35, 45, 30],
            backgroundColor: 'rgba(132, 61, 255, 1)',
            borderRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'white', font: { size: 12 } }
          },
          y: {
            grid:{display:false},
            ticks: { color: 'white', font: { size: 12 } }
          }
        }
      }
    });
  }
}
