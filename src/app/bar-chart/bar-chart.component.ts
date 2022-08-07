import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  pieChartType = 'bar'

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }

  pieChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

  pieChartData: any = [
    {
      data: []
    }
  ];

  ngOnInit() {
    this.apiService.getBarData().subscribe(
      (res: any) => {
        this.pieChartData = [res]
        console.log(res);

      }
    );
  }

}
