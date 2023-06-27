import React from "react";
import "./sessao.css";
import Api from "../../utils/Api";
function Sessao() {
  function loginExampleApi() {
    const user = {
      nome: "user123",
      senha: "123",
    };
    Api.LoginUserApi(user);
  }
  return (
    <div className="main">
      <div className="form-container">
        <h1>LOGIN</h1>
        <button onClick={loginExampleApi()}>login</button>
      </div>
    </div>
  );
}

export default Sessao;
