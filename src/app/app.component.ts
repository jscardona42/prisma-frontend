import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: GraphqlService, private router: Router) {
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    
  }

  title = 'nestjs-prisma-frontend';
}
