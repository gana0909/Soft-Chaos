import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Soft-Chaos';

  constructor(private route: ActivatedRoute,) {}

  animationstate: any;

  onActivate($event:any){
  }
}
