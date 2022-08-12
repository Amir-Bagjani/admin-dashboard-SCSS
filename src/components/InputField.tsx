import React from "react";

type InPutOwnProps<E extends React.ElementType = "input" | "textarea"> = {
  label: string;
  as?: E;
};

type InputBoxProps<E extends React.ElementType> = InPutOwnProps<E> &
  React.ComponentProps<E>;

const InputField = <E extends React.ElementType = "input">({
  label,
  as,
  ...rest
}: InputBoxProps<E>) => {
  const Tag = as || "input";

  return (
    <div className="form-input">
      <label>{label}</label>
      <Tag {...rest} />
    </div>
  );
};

export default InputField;
