import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  typeChartAdmin1: any;
  dataChartAdmin1: any;
  optionsChartAdmin1: any;

  typeChartAdmin2: any;
  dataChartAdmin2: any;
  optionsChartAdmin2: any;

  typeChartAdmin3: any;
  dataChartAdmin3: any;
  optionsChartAdmin3: any;

  constructor() { }

 ngOnInit() {
  this.buildChartAdmin1();
  this.buildChartAdmin2();
  this.buildChartAdmin3();
  }

  buildChartAdmin1() {
    this.typeChartAdmin1 = 'line';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChartAdmin1 = {
      labels: ["1 Jan 2018", "2 Jan 2018", "3 Jan 2018", "4 Jan 2018", "5 Jan 2018"],
      datasets: [
        {
          label: "รายได้รวม",
          data: [10, 30, 50, 30, 40],
          fill: false
        },
        {
          label: "รายจ่าย",
          data: [5, 30, 10, 0, 25],
          fill: false
        }
      ]
    };
    this.optionsChartAdmin1 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  buildChartAdmin2() {
    this.typeChartAdmin2 = 'line';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChartAdmin2 = {
      labels: ["1 Jan 2018", "2 Jan 2018", "3 Jan 2018", "4 Jan 2018", "5 Jan 2018"],
      datasets: [
        {
          label: "สำนักพิมพ์แจ่มใส",
          data: [10, 30, 50, 30, 40],
          fill: false
        },
        {
          label: "สำนักพิมพ์ลาดพร้าว",
          data: [5, 30, 10, 0, 25],
          fill: false
        },
        {
          label: "สำนักพิมพ์มองดูสิเออ",
          data: [15, 62, 30, 10, 25],
          fill: false
        }
      ]
    };
    this.optionsChartAdmin2 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  buildChartAdmin3() {
    this.typeChartAdmin3 = 'bar';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChartAdmin3 = {
      labels: ["1 Jan 2018", "2 Jan 2018", "3 Jan 2018", "4 Jan 2018", "5 Jan 2018"],
      datasets: [
        {
          type: 'line',
          label: "รายได้",
          data: [10, 30, 50, 30, 40],
          fill: false
        },
        {
          type: 'bar',
          label: "จำนวนครั้ง",
          data: [10, 30, 50, 30, 40],
          fill: false
        }
      ]
    };
    this.optionsChartAdmin3 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
