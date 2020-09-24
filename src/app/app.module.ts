import { BoardService } from './service/rest-api/board.service';
import { MyinfoService } from './service/rest-api/myinfo.service';
import { HttpRequestInterceptorService } from './service/rest-api/common/http-request-interceptor.service';
import { SignService } from './service/rest-api/sign.service';
import { SignupComponent } from './component/member/signup/signup.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { HomeComponent } from './component/home.component';
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './component/logout/logout.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';
import { BoardComponent } from './component/board/board.component';
import { PostComponent } from './component/board/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    MyinfoComponent,
    BoardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
    SignService,
    MyinfoService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
