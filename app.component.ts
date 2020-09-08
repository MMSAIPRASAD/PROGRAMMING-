import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  HideSteps:boolean = true
  visible:boolean = false

  onclick()
  {
    this.HideSteps= !this.HideSteps;
    this.visible= !this.visible
  }
}






