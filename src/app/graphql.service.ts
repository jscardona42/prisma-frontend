import { Injectable } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { ApolloClient, split } from '@apollo/client/core';
import { UserType } from './types/userType';
import { shareReplay, pluck } from 'rxjs/operators';
import { ApolloTestingController, ApolloTestingModule } from "apollo-angular/testing";

@Injectable({
  providedIn: 'root',
})

export class GraphqlService {
  public users: UserType[];
  public user: UserType;
  public createUser: UserType;
  public updatedUser: UserType;

  constructor(private apollo: Apollo, httpLink: HttpLink) {

  }

//   public getUsers = () => {
//     this.apollo.watchQuery<any>({
//       query: gql`
//       query{
//     signInUser(data:{email:"usuario6@gmail.com", password: "12345"}){
//     token
//   }
// }`
//     })
//       .valueChanges
//       .subscribe(({ data, loading }) => {
//         console.log(data);
//       });
//   }
// }
}











