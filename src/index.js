import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// third-party
import { Provider as ReduxProvider } from "react-redux";

// scroll bar
import "simplebar/src/simplebar.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// load mock apis

// project import
import App from "./App";
import { store } from "store";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

ReactDOM.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
