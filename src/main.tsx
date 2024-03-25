import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./redux";

// TODO setup auth0
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider clientId="" domain="">
        <App />
      </Auth0Provider>
    </Provider>
  </StrictMode>
);
