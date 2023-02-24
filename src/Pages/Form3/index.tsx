import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Validator } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/Hooks/useAppSelector'
import { setName,setCurrentStep, setEmail,setGithub} from '../../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


export const Form3 = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user)


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(setEmail(e.target.value))
    }
    const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(setGithub(e.target.value))
    }

    const handleClickProximo = () =>{
        
       
     
        if(user.email !== ''  && user.github){
            navigate('/step4')
        }else{
            alert('Favor prencher o campo')
        }
    }

    useEffect(()=>{
      if(user.name === ''){
        navigate('/')
      }else{
        dispatch({
            type: setCurrentStep,
            payload: 3
        })
      }
    },[])

   
    return(
        <Theme>
        <C.Container>
           <p>passo 3/3</p>
           <h1>{user.name}, onde te achamos </h1>
           <p>Preencha com seus dados para conseguirmos entrar em contato.</p>
            <hr />

            <label>Qual o seu email:
                <input type="email"
                 value ={user.email}
                 autoFocus
                 onChange={handleEmailChange}
                />
            </label>
            <label>Qual o seu Github:
                <input type="url"
                 value ={user.github}
                 onChange={handleGithubChange}
                />
            </label>

           
           
           <Link to='/step2' className='BackButton'>Voltar</Link>
           <button onClick={handleClickProximo}>Proximo</button>
        </C.Container>
        </Theme>

    )
}