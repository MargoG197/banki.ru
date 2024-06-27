import ReactDOM from "react-dom/client";
import React from "react";
import BankForm from "../components/form/index.jsx"

///// рендерим готовую форму в html
ReactDOM.createRoot(
    document.getElementById("root"))
    .render(
      <BankForm />
);
    
