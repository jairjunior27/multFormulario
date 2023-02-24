import { Theme } from '../../components/Theme'
import * as C from './style'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/Hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { setName,setCurrentStep } from '../../redux/reducers/userReducer'
import { useEffect } from 'react'


export const Form1 = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user)

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
     dispatch(setName(e.target.value))
    }
    const handleClickProximo = () =>{
        if(user.name !== ''){
            navigate('/step2')
        }else{
            alert('Favor prencher o campo.')
        }
       
    }

    useEffect(()=>{
        dispatch(setName(''))
       dispatch({
        type: setCurrentStep,
        payload: 1
       })
    },[])

    return(

        <Theme>
        <C.Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com seu nome </h1>
            <p>Prencha abaixo com o seu nome</p>
             <hr/>

            <label> Seu nome:
                <input type="text" 
                value={user.name}
                autoFocus
                onChange={handleChangeName}
                />
            </label>

            <button onClick={handleClickProximo}>Proximo</button>
        </C.Container>
        </Theme>
    )
}