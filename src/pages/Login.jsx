import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authservice from "../app/auth.js";
import { login as authLogin } from "../store/adminSlice.js";

import { Button, Inputs } from "../components";

function Login({ signInStateHandler }) {
  const eRef = useRef();
  const pRef = useRef();
  const dispatch = useDispatch();

  const InputFieldStyles =
    "rounded-xl outline-none border-solid border-2 border-sky-600";

  const login = async (e) => {
    e.preventDefault();
    const email = eRef.current?.value;
    const password = pRef.current?.value;

    await authservice
      .login({ email, password })
      .then((response) => {
        dispatch(authLogin({ data: response }));
        signInStateHandler();
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "auto");
  }, []);

  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-90">
      <form
        onSubmit={login}
        className="absolute w-[100%] sm:w-[90%] z-10 md:w-[35%] p-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-slate-300"
      >
        <Button
          type={"button"}
          submitHandler={signInStateHandler}
          name={"❌"}
          classname={`absolute top-4 right-4`}
        />
        <h2 className="text-center mb-6 text-black">Login</h2>
        <Inputs
          type={"email"}
          classname={InputFieldStyles}
          placeholder={"Enter your Email..."}
          ref={eRef}
        />
        <Inputs
          type={"password"}
          classname={InputFieldStyles}
          placeholder={"Enter your Password..."}
          ref={pRef}
        />
        <div className="flex justify-between">
          <Button
            type={"submit"}
            name={"Login"}
            classname={"m-3 border-solid border-2 border-sky-600 rounded-sm"}
          />
          <Link
            to="/signup"
            onClick={signInStateHandler}
            className="mt-2 text-blue-600 underline decoration-solid h-10"
          >
            signup
          </Link>
        </div>
      </form>
    </div>,
    document.querySelector(".modals")
  );
}

export default Login;
