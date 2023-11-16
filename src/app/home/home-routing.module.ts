import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { RoundComponent } from './round/round.component';

const routes: Routes = [  {
  path: '',
  component: HomeComponent,
  children: [{path:'assesment', component:MainPageComponent},
{path:'dashboard', component:DashboardComponent},
{path:'library', component:LibraryComponent},
{path:'round', component:RoundComponent},
{path:'', redirectTo:'assesment' ,  pathMatch: 'full',},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
