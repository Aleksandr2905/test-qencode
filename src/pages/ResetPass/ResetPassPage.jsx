import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { Label } from "./ResetPassPage.styled";
import { FormaWrap } from "../LoginPage/LoginPage.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassSchema } from "../../helpers/validation";

export const ResetPassPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(resetPassSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <Logo />
      <Title text="Create new Password?" />
      <FormaWrap onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Password</Label>
          <Input
            name="password"
            register={register}
            errors={errors}
            placeholder="Password"
          />
        </div>
        <div>
          <Label>Confirm Password</Label>
          <Input
            name="passwordReset"
            register={register}
            errors={errors}
            placeholder="Password"
          />
        </div>
        <Button text="Reset Password" />
      </FormaWrap>
    </>
  );
};
