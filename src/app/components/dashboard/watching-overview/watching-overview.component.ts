;import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, ChartOptions } from 'chart.js/auto';


@Component({
  selector: 'app-watching-overview',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './watching-overview.component.html',
  styleUrl: './watching-overview.component.scss'
})
export class WatchingOverviewComponent implements AfterViewInit{


  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (!ctx) return;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Yearly',
            data: [100, 200, 500, 700, 800, 650, 400, 300, 200, 150],
            borderColor: 'rgba(247, 59, 72, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Monthly',
            data: [150, 250, 450, 650, 750, 700, 500, 350, 250, 200],
            borderColor: 'rgba(0, 95, 234, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Weekly',
            data: [80, 100, 400, 600, 700, 600, 500, 300, 150, 90],
            borderColor: 'rgba(255, 210, 0, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: 'white',
            pointBorderColor: 'yellow',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: 'white',
              font: { size: 14 },
              usePointStyle: false,
              boxWidth: 20,
              boxHeight: 12,
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleColor: 'white',
            bodyColor: 'white'
          }
        },
        scales: {
          x: {
            // ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { font: { size: 12 } },
        display: false,
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { font: { size: 12 } },
            display: true,
            color: "rgba(255, 255, 255, 0.2)",

          }
        }
      } as ChartOptions<'line'>
    });
  }
}
