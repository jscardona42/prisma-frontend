
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/types/userType';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any = [];

  user: UserType = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(result => {
        var data = result.data;
        this.users = data;
      }, (err) => {
        console.log(err.graphQLErrors)
      })
  }

}
