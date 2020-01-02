import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @Input()
  dataValues: Object;
  data: any[];

  @Output()
  selected = new EventEmitter();

  view: any[] = [900, 500];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(eventData): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(eventData)));
    this.selected.emit(eventData);
  }

  onActivate(eventData): void {
    console.log('Activate', JSON.parse(JSON.stringify(eventData)));
  }

  onDeactivate(eventData): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(eventData)));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataValues.currentValue) {
      try {
        if (typeof changes.dataValues.currentValue == 'object') {
          this.data = changes.dataValues.currentValue;
        } else {
          this.data = (JSON.parse(changes.dataValues.currentValue));
        }
      } catch (e) {  // We should have some better error handling
        console.log(e);
        return false;
      }
    }
  }
}
