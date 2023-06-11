import { ButtonRgb } from "../../components/Button"
import { InputGlobal } from "../../components/Input"
import {  FormCenter, DivLogin, Title } from "./style"
import { ButtonRedirect } from "../../components/ButtonRedirect"
import { signIn } from "../../schemas"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"


export const Login = () => {
    const form = signIn();
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(false);
    const email = form.watch("email");
    const password = form.watch("password");

    useEffect(() => {
        if(email.includes("@gmail.com") || email.includes("@hotmail.com")  && password.length >= 6){
            setActiveButton(true);
        }else{
            setActiveButton(false);
        }
    },[form.watch("email") , form.watch("password"),activeButton])

    const onSubmit = (data) => {
      
        navigate("/carteira")
    };
    
    return(
        <>
        <DivLogin>
            <FormCenter onSubmit={form.handleSubmit(onSubmit)}>
                <Title>Login</Title>
                <InputGlobal label = "Email" register = {form.register}  error ={form.errors.email?.message} type="text" name="email" id= "1" />
                <InputGlobal label = "Password" register = {form.register} error ={form.errors.password?.message} type="password" name="password" id= "2" />
                <ButtonRedirect Text="Registre-se" Rota="/register"/>
                <ButtonRgb text="Login" status={activeButton}/>
            </FormCenter>
        </DivLogin>
        </>
    )
}