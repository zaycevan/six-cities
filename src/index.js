import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "@components/app/app-connect";
import store from "@store/index";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
