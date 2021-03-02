import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo, httpLink: HttpLink) {

  }

  public getUsers = () => {
    return this.apollo.query({
      query: gql`
        query {
          users {
            id
            name
            email
            password
            token
            salt
            posts{
              title
              content
            }
          }
        }`
    })
  }

}


