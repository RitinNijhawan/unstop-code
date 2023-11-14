import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: false,
//  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  source:Array<any>=[{heading:"Math Assessment" , jobDate:"20 Apr 2023", duration:"00",questions:"00" , persons:['LP'], share:'#'},
  {heading:"Math Assessment" , jobDate:"20 Apr 2023", duration:"00",questions:"00" , persons:['LP','GP','LP'], share:'#'}]
  values:Array<any> =['UI/UX and Design','No of Question','Web Development','UI/UX and Design','Web Development']

}
