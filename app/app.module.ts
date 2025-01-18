import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
