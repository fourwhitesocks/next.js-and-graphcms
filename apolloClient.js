import {
    ApolloClient,
    InMemoryCache
    
  } from "@apollo/client";
  

  const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/cktq695ti1x7g01xmbd4u8hqn/master',
    cache: new InMemoryCache(),
  });
  
export default client;