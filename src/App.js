import { Provider } from "react-redux";
import { store } from "./redux";
import Router from "./router";

export default function App(){
  return (
    <Provider store={store}>
    <Router></Router>
    </Provider>
  )
}