import { SignService } from 'src/app/service/rest-api/sign.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public signService: SignService
  ){}
}
