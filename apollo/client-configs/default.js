import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default (ctx) => {
  const httpLink = new HttpLink({ uri: 'http://localhost:4000' });


  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // eslint-disable-next-line
    const token = process.server ? ctx.req.session : window.__NUXT__.state.session;

    operation.setContext({
      headers: { authorization: `Bearer ${token}` },
    });
    return forward(operation);
  });
  const link = middlewareLink.concat(httpLink);
  return {
    link,
    cache: new InMemoryCache(),
  };
};
