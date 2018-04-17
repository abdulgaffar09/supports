import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from '../admin/admin.component';
import { ClaimsComponent } from '../claims/claims.component';
import { PfpengineerComponent } from '../pfpengineer/pfpengineer.component';
import { Q3summaryComponent } from '../q3summary/q3summary.component';
import { Q4summaryComponent } from '../q4summary/q4summary.component';
import { TableaureportsComponent } from '../tableaureports/tableaureports.component';
import { VocissueComponent } from '../vocissue/vocissue.component';


export const router: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'pfpengineer', component: PfpengineerComponent },
  { path: 'q3summary', component: Q3summaryComponent },
  { path: 'q4summary', component: Q4summaryComponent },
  { path: 'tableau', component: TableaureportsComponent },
  { path: 'vocissue', component: VocissueComponent },
];
