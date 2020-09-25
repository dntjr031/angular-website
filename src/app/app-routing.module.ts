import { Error404Component } from './component/common/error/error404.component';
import { BoardResolve } from './component/board/resolve/board-resolve';
import { PostModifyComponent } from './component/board/post-modify.component';
import { PostViewComponent } from './component/board/post-view.component';
import { PostComponent } from './component/board/post.component';
import { BoardComponent } from './component/board/board.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './component/logout/logout.component';
import { SignupComponent } from './component/member/signup/signup.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'myinfo', component: MyinfoComponent, canActivate: [AuthGuard]},
  {path: 'board/:boardName', component: BoardComponent, resolve: {posts: BoardResolve}},
  {path: 'board/:boardName/post', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'board/:boardName/post/:postId', component: PostViewComponent},
  {path: 'board/:boardName/post/:postId/modify', component: PostModifyComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
