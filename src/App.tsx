import React from "react";
import { LoginForm } from "./components/LoginForm";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LoginForm />
    </>
  );
};

export default App;
