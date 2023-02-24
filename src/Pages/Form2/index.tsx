import * as C from './styles'
import { Theme } from '../../components/Theme'
import { OptionSelect } from '../../components/OptionSelect'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/Hooks/useAppSelector'
import { setName,setCurrentStep, setLevel} from '../../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


export const Form2 = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user)

    const handleClickProximo = () =>{
        if(user.name !== ''){
            navigate('/step3')
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
            payload: 2
        })
      }
    },[])

    const handleLevel = (level: number)=>{
        dispatch({
            type: setLevel,
            payload: level
        })
    }
    return(
        <Theme>
        <C.Container>
           <p>passo 2/3</p>
           <h1>{user.name}, o que melhor descreve você </h1>
           <p>Escolha a opção que melhor condiz com o seu estado atual profissionalmente.</p>
           <hr/>

           <OptionSelect
           title='Iniciante'
           description='Comecei a programar há  menos de 2 anos'
           icon='&#128522;'
           selected={user.level === 0}
           onClick ={()=> handleLevel(0)}
           />
           <OptionSelect
           title='Sou programador'
           description='Programo  há  mais de 2 anos'
           icon='&#128526;'
           selected={user.level === 1}
           onClick ={()=> handleLevel(1)}
           />
           
           <Link to='/' className='BackButton'>Voltar</Link>
           <button onClick={handleClickProximo}>Proximo</button>
        </C.Container>
        </Theme>

    )
}