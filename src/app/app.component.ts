import { LoadingSpinnerService } from './service/loading-spinner/loading-spinner.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public signService: SignService,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService
  ){
    router.events.subscribe((event: RouterEvent) => {
      this.updateLoadingSpinner(event);
    })
  }

  private updateLoadingSpinner(event: RouterEvent){
    if(event instanceof NavigationStart){
      console.log('Navigation Start');
      this.loadingSpinnerService.show();
    }

    if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
      console.log('Navigation End');
      this.loadingSpinnerService.hide();
    }
  }
}
