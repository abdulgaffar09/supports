import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GridOptions } from "ag-grid";
import { RedComponentComponent } from "../red-component/red-component.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  ngOnInit() {
  }


  private http: Http;
  private gridOptions: GridOptions;




  constructor() {
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


}
