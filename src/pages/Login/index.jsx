import { ButtonRgb } from "../../components/Button";
import { InputGlobal } from "../../components/Input";
import { FormCenter, DivLogin, Title } from "./style";
import { ButtonRedirect } from "../../components/ButtonRedirect";
import { SignIn } from "../../schemas";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Login = ({ hadleLogin }) => {
  const form = SignIn();
  const [activeButton, setActiveButton] = useState(false);
  const navigate = useNavigate();
  const email = form.watch("email");
  const password = form.watch("password");

  useEffect(() => {
    let regex = /\S+@\S+\.\S+/;
    if (
    regex.test(email)
     && password.length >= 6
     ) 
     {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [form.watch("email"), form.watch("password"), activeButton]);

  const onSubmit = async (user) => {
    hadleLogin(user);
    navigate("/carteira");
  };

  return (
    <>
      <DivLogin>
        <FormCenter onSubmit={form.handleSubmit(onSubmit)}>
          <Title>Login</Title>
          <InputGlobal
            label="Email"
            register={form.register}
            error={form.errors.email?.message}
            type="text"
            name="email"
            id="1"
            Color={"white"}
            Bottom={"2px solid white"}
            ColorError={"#F80606"}
          />
          <InputGlobal
            label="Password"
            register={form.register}
            error={form.errors.password?.message}
            type="password"
            name="password"
            id="2"
            Color={"white"}
            Bottom={"2px solid white"}
            ColorError={"#F80606"}
          />
          <ButtonRedirect Text="Registre-se" Rota="/register" />
          <ButtonRgb text="Login" status={activeButton} />
        </FormCenter>
      </DivLogin>
    </>
  );
};
