import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apollo: Apollo, httpLink: HttpLink) { }
  public getPost = () => {
    return this.apollo.query({
      query: gql`
        query {
          posts{
            title
            content
            author{
              email
              name
            }
          }
        }`
    })
  }



}
