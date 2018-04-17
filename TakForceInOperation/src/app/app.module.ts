import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { router } from '../app/routeconfig/routeconfig.module';
import { AdminComponent } from './admin/admin.component';
import { VocissueComponent } from './vocissue/vocissue.component';
import { ClaimsComponent } from './claims/claims.component';
import { Q3summaryComponent } from './q3summary/q3summary.component';
import { Q4summaryComponent } from './q4summary/q4summary.component';
import { PfpengineerComponent } from './pfpengineer/pfpengineer.component';
import { TableaureportsComponent } from './tableaureports/tableaureports.component';
import { HttpClientModule } from '@angular/common/http';

//Ag Grid Plugins

import { AgGridModule } from "ag-grid-angular";
//import { ProfociencycellrenderComponent } from './profociencycellrender/profociencycellrender.component';
import { RedComponentComponent } from "./red-component/red-component.component";
import { DashboardService } from './dashboard/dashboard.service';
import { HeaderComponent } from './header/header.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';

//import { RichGridComponent } from "./rich-grid.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    VocissueComponent,
    ClaimsComponent,
    Q3summaryComponent,
    Q4summaryComponent,
    PfpengineerComponent,
    TableaureportsComponent,
    RedComponentComponent,
    HeaderComponent,
    LeftSideBarComponent
  ],
  imports: [
    
    BrowserModule, FormsModule,RouterModule.forRoot(router, { enableTracing: true }),
        AgGridModule.withComponents([
          RedComponentComponent
    ]),
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
