import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { UserComponent } from './components/user/user.component';
import { AuthComponent } from './components/auth/auth.component';
import { PostComponent } from './components/post/post.component';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('token') as string) as string;
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    PostComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      // allowedDomains: ["localhost:4200"]
      },
    }),
    BrowserModule,
    AppRoutingModule,
    HttpLinkModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
