import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./tailwind.css";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistedReducer from "./redux/reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(persistedReducer);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
