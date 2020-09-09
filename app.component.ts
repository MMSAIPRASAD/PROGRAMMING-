import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  C:boolean = true
  visible:boolean = true

  onclick()
  {
    this.C= !this.C;
    this.visible= !this.visible
  }


  HideSteps:boolean = true
  visible1:boolean = true

  onclick1()
  {
    this.HideSteps= !this.HideSteps;
    this.visible1= !this.visible1
  }



}

 







