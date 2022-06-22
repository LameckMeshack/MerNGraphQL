import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Header } from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
