import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  pieChartType: ChartType = 'pie'

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }

  pieChartLabels = []

  pieChartData = []

  ngOnInit() {
    this.apiService.getSalesData().subscribe(
      (res: any) => {

        let categoriesData = res.map((res: any) => {
          let obj = {
            'categories': res.categories
          }
          return obj;
        });

        let salesData = res.map((res: any) => {
          let obj = {
            'data': res.data
          }
          return obj;
        });

        this.pieChartData = salesData[0].data;
        this.pieChartLabels = categoriesData[1].categories


        this.pieChartData = res
        console.log(res);

      }
    );
  }

}
