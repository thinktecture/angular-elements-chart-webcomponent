import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input()
  data: any[];

  view: any[] = [900, 500];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(eventData): void {
    console.log('PieChart - Item clicked', JSON.parse(JSON.stringify(eventData)));
  }

  onActivate(eventData): void {
    console.log('PieChart - Activate', JSON.parse(JSON.stringify(eventData)));
  }

  onDeactivate(eventData): void {
    console.log('PieChart - Deactivate', JSON.parse(JSON.stringify(eventData)));
  }
}
