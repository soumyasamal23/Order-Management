import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent,
     ReportComponent, HelpComponent],
  imports: [
    CommonModule, ReactiveFormsModule, ReactiveFormsModule, FormsModule
  ]
})
export class HomeModule { }
