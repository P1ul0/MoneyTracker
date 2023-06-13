import { Button } from "./style"
import { useNavigate } from "react-router"

export const ButtonRedirect = ({Text , Rota}) => {
    const navigate = useNavigate()
    
    const hadleRedirect = async() =>{
        navigate(Rota)
    }
    return(
        <>
        <Button onClick={hadleRedirect}>{Text}</Button>
        </>
    )
}