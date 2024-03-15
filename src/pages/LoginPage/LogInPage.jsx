import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Btn,
  Buttons,
  Line,
  Lines,
  Word,
  Wrapper,
  FormaWrap,
  ForgotPass,
  LinkSignUp,
  TextSignUp,
} from "./LoginPage.styled";
import { logInSchema } from "../../helpers/validation";

export const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(logInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Logo />
      <Title text={"Log in to your account"} />
      <Wrapper>
        <Buttons>
          <Btn>
            <FcGoogle size="18px" />
            Google
          </Btn>
          <Btn>
            <FaGithub size="18px" />
            Github
          </Btn>
        </Buttons>
        <Lines>
          <Line />
          <Word>OR</Word>
          <Line />
        </Lines>
        <FormaWrap onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            register={register}
            errors={errors}
            placeholder="Work email"
          />
          <Input
            name="password"
            register={register}
            errors={errors}
            placeholder="Password"
          />
          <ForgotPass to="/forgot-password">Forgot your password?</ForgotPass>
          <Button text="Log in to Qencode" />
        </FormaWrap>
        <TextSignUp>
          Is your company new to Qencode?&#32;
          <LinkSignUp to="/">Sign up</LinkSignUp>
        </TextSignUp>
      </Wrapper>
    </>
  );
};
