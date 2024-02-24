import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { Inputs, Button } from "../components";
import authservice from "../app/auth";

function Signup({ signUpStateHandler }) {
    const InputFieldStyles =
        "rounded-xl outline-none border-solid border-2 border-sky-600";

    const nRef = useRef();
    const eRef = useRef();
    const pRef = useRef();

    const createAccount = async (e) => {
        e.preventDefault();

        const name = nRef.current?.value;
        const email = eRef.current?.value;
        const password = eRef.current?.value;

        console.log(
            nRef.current?.value,
            eRef.current?.value,
            pRef.current?.value
        );

        const response = await authservice.createAccount({
            email,
            password,
            name,
        });

        console.log(response);
        signUpStateHandler();
    };

    useEffect(
        () => {
            document.body.style.overflowY = "hidden";

            return () => (document.body.style.overflowY = "auto");
        },
        [
            /*dependency array*/
        ]
    );

    return ReactDOM.createPortal(
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-90">
            <form
                onSubmit={createAccount}
                className="absolute w-[100%] sm:w-[90%] z-10 md:w-[35%] p-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-slate-300"
            >
                <Button
                    type={"button"}
                    submitHandler={signUpStateHandler}
                    name={"❌"}
                    classname={`absolute top-4 right-4`}
                />
                <h2 className="text-center mb-6 text-black">Sign Up</h2>
                <Inputs
                    name={"name"}
                    type={"text"}
                    classname={InputFieldStyles}
                    placeholder={"Enter your Name..."}
                    ref={nRef}
                />
                <Inputs
                    name={"email"}
                    type={"email"}
                    classname={InputFieldStyles}
                    placeholder={"Enter your Email..."}
                    ref={eRef}
                />
                <Inputs
                    name={"password"}
                    type={"password"}
                    classname={InputFieldStyles}
                    placeholder={"Enter your Password..."}
                    patternREGX={
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
                    }
                    ref={pRef}
                />
                <div className="flex justify-between">
                    <Button
                        type={"submit"}
                        name={"signup"}
                        classname={
                            "m-3 border-solid border-2 border-sky-600 rounded-sm"
                        }
                    />
                </div>
            </form>
        </div>,
        document.querySelector(".modals")
    );
}

export default Signup;
