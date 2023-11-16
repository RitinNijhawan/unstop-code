import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardsComponent } from './main-page/cards/cards.component';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { RoundComponent } from './round/round.component';

@NgModule({
  declarations: [MainPageComponent,HomeComponent,CardsComponent,DashboardComponent,LibraryComponent,RoundComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChipsModule,
    FormsModule
  ]
})

export class HomeModule { }
