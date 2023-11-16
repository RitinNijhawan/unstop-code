import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent,ComingSoonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SidebarComponent,ComingSoonComponent]
})
export class SharedModule { }
 