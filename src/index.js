import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AmplifyProvider, defaultTheme } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports.js";
import Amplify from "aws-amplify";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = {
  name: "my-theme",
  tokens: {
    colors: {
      neutral: {
        10: { value: defaultTheme.tokens.colors.neutral[100].value },
        20: { value: defaultTheme.tokens.colors.neutral[90].value },
        40: { value: defaultTheme.tokens.colors.neutral[80].value },
        80: { value: defaultTheme.tokens.colors.neutral[40].value },
        90: { value: defaultTheme.tokens.colors.neutral[20].value },
        100: { value: defaultTheme.tokens.colors.neutral[10].value },
      },
      black: { value: "#fff" },
      white: { value: "#000" },
      brand: {
        primary: {
          10: { value: "#C7EFCA" },
          20: { value: "#9AE2A1" },
          40: { value: "#4CCB68" },
          60: { value: "#44AF5B" },
          80: { value: "#31703D" },
          90: { value: "#224226" },
        },
      },
      // teal: { value: "#ff7000" },
    },
  },
};

root.render(
  <AmplifyProvider theme={theme}>
    <App />
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
