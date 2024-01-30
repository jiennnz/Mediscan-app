"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthFormWrapper = () => {
  const [formType, setFormType] = useState("login");

  const toggleForm = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  return (
    <article className="flex flex-col items-center rounded-[30px] bg-white  p-[48px] shadow-lg">
      {/* Header */}
      <header>
        <h1 className=" text-[43px] font-bold text-[#007ACC]">
          {formType === "login" ? "Log in" : "Create an Account"}
        </h1>
      </header>

      {/* Toggle between Login and Register */}
      {formType === "login" ? <LoginForm /> : <RegisterForm />}

      {/* Footer */}
      <footer className=" flex flex-row">
        {formType === "login" ? (
          <>
            <h6>Don&apos;t have an account?</h6>
            &nbsp;
            <button className="text-[#007ACC]" onClick={toggleForm}>
              Create One
            </button>
          </>
        ) : (
          <>
            <h6>Already have an account?</h6>
            &nbsp;
            <button className="text-[#007ACC]" onClick={toggleForm}>
              Log in Instead
            </button>
          </>
        )}
      </footer>
    </article>
  );
};

export default AuthFormWrapper;
