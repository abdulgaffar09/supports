import { Component, OnInit } from '@angular/core';


import { Http } from '@angular/http';
import { GridOptions } from "ag-grid";
import { RedComponentComponent } from "../red-component/red-component.component";


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  private http: Http;
  private gridOptions: GridOptions;




  constructor(private dashboardService: DashboardService) {
    //this.getClaimDetails();
    this.gridOptions = <GridOptions>{};

    this.gridOptions.columnDefs = [
      { headerName: "claimNumber", field: "claimNumber", },
      { headerName: "alertAdd", field: "alertAdd", },
      { headerName: "vin", field: "vin", },
      { headerName: "pfp", field: "pfp", },
      { headerName: "pfpDescription", field: "pfpDescription", },
      { headerName: "model", field: "model", },
      { headerName: "roNumber", field: "roNumber", },

    ];
    this.gridOptions.rowData = [
      {
        claimNumber: "adfasdfasdf", alertAdd: "csdcsd", vin: "sdsad", pfp: "asasdasdsad", pfpDescript: "czxczxc",
        model: "cdsdc",
        roNumber: "dasdf"
      },
      {
        claimNumber: "adfasdfasdf", alertAdd: "csdcsd", vin: "sdsad", pfp: "asasdasdsad", pfpDescript: "czxczxc",
        model: "cdsdc",
        roNumber: "dasdf"
      },
    ];




  }
    //getClaimDetails() {
    //  this.http.get("./claimsSummaryGrid.json").map((res: any) => { console.log(res.json()) });
    //}
    ngOnInit(){
      this.getJsonData();
    }

    getJsonData(){
      console.log('dashboard data');
      
      this.dashboardService.getJsonData().subscribe(data => {
        console.log('dashboard data',data);
      }, error => {
        console.log('dashboard error',error);
        
      })
    }
}
