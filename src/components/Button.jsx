import React from "react";

function Button({
    type = "button",
    submitHandler,
    name = "add your custom name like {name= 'LOREM IPSUM'}",
    classname = "",
}) {
    return (
        <button
            type={type}
            className={`px-3 ${classname}`}
            onClick={submitHandler}
        >
            {name}
        </button>
    );
}

export default Button;
