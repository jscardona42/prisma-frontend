import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'users', component: UserComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'posts', component: PostComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
