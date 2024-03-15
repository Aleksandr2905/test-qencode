import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Errors, InputLayout, InputWrapper } from "./Input.styled";

export const Input = ({ name, register, errors, placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getInputType = () => {
    if (name === "password" || "passwordReset") {
      return passwordVisible ? "text" : "password" || "passwordReset";
    }
    return name === "email" ? "email" : "text";
  };

  return (
    <InputWrapper>
      <InputLayout
        {...register(name)}
        placeholder={placeholder}
        type={getInputType()}
        $errors={errors[name]}
      />
      <Errors>{errors[name]?.message}</Errors>

      {(name === "password" || "passwordReset") && (
        <FiEye
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "14px",
            right: "15px",
          }}
          onClick={togglePasswordVisibility}
        />
      )}
    </InputWrapper>
  );
};
