import { NgModule } from '@angular/core';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { HttpClientModule, HttpClient, JsonpClientBackend } from '@angular/common/http';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql';
export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token: string = JSON.parse(localStorage.getItem('token') as string) as string;

    // console.log(token);

    if (token === null) {
      return {
        headers: {
          Authorization: `Bearer Errorororo`
        }
      };
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}


@NgModule({
  imports: [HttpClientModule, HttpLinkModule,],
  providers: [
    HttpLink,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      // (httpLink: HttpLink) => {
      //   return {
      //     cache: new InMemoryCache(),
      //     link: httpLink.create({
      //       uri: 'http://localhost:3000/graphql',
      //     }),
      //   };
      // },
      deps: [HttpLink],
      // multi: true
    },
  ],
})
export class GraphQLModule { }
