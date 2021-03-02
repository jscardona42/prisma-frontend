import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';
import { UserType } from '../types/userType';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  constructor(private apollo: Apollo, httpLink: HttpLink) { }

  public signUp = (user: any) => {

    const ADD_USER = gql`
    mutation($name: String!, $email: String!, $password: String!) {
      signUpUser(data:{name: $name, email: $email, password: $password}){
        id
        email
        name
        password
        posts{
          id
          published
          title
          content
        }
      }
    }`;

    return this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })

  }

  public signIn = (user: any) => {
    const SIGN_USER = gql`
    query($email: String!, $password: String!) {
      signInUser(data:{email: $email, password: $password}){
        token
      }
    }`;

    return this.apollo.query({
      query: SIGN_USER,
      variables: {
        email: user.email,
        password: user.password
      }
    })



    // return this.apollo.query({
    //   query: gql`
    //     query {
    //       signInUser(data:{email:"usuario1@gmail.com", password: "12345"}){
    //       token
    //     }
    //     }`
    // })
  }
}
