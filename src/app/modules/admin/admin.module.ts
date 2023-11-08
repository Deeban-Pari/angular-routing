import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FeaturesComponent } from './components/features/features.component';
import { GraphsComponent } from '../graphs/graphs.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    AnalyticsComponent,
    FeaturesComponent,
    GraphsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ChartModule],
})
export class AdminModule {}
