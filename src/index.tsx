import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { RecoilRoot } from "recoil";
import { lightTheme } from "./Theme";
import { initializeApp } from "firebase/app";
import firebaseConfig from "Utils/Firebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Add Recoil in here to change themes
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
