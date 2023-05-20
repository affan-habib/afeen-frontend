import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ConfigProvider } from "contexts/ConfigContext";

ReactDOM.render(
  <ConfigProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root")
);
