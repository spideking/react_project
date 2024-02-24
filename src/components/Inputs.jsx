import React, { forwardRef, useId } from "react";

const Inputs = forwardRef(function Inputs(
  {
    label,
    type = "text",
    classname = "",
    placeholder = "Enter your text",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full p-1">
      <input
        id={id}
        type={type}
        className={`w-full p-2 mb-2 ${classname}`}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default Inputs;
