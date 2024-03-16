import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { ButtonCancel } from "./ForgotPassPage.styled";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassSchema } from "../../helpers/validation";
import { useDispatch } from "react-redux";
import { forgotPassThunk } from "../../redux/operations";

export const ForgotPassPage = () => {
  const navigate = useNavigate("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(forgotPassSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (password) => {
    dispatch(forgotPassThunk(password));
    reset();
    navigate("/reset-password");
  };

  return (
    <>
      <Logo />
      <Title text="Forgot Password?" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          register={register}
          errors={errors}
          placeholder="Work email"
        />
        <Button text="Send" />
      </form>
      <ButtonCancel to="/">Cancel</ButtonCancel>
    </>
  );
};
