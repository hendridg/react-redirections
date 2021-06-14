import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { FirebaseContext } from "../src/context/firebase"
import store from "./redux"
import { Provider } from "react-redux"

//Push you config here
var firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "material-ui-8e969.firebaseapp.com",
  projectId: "material-ui-8e969",
  storageBucket: "material-ui-8e969.appspot.com",
  messagingSenderId: "1093003317072",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-CNRDZLRHE3",
}
// Initialize Firebase
// window.firebase.initializeApp(firebaseConfig)
window.firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
)
