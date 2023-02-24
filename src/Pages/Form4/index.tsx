import * as C from './styles'
import { Theme } from '../../components/Theme'
import { OptionSelect } from '../../components/OptionSelect'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/Hooks/useAppSelector'
import { setName,setCurrentStep, setEmail,setGithub} from '../../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Form4 = () =>{
  
    const user = useAppSelector(state => state.user)


   
    return(
      
        <C.Container>
          
           <C.Area>
           <Header/>
            <C.Info>
                <p>Nome:<strong> {user.name}</strong></p>
                <p>Email:<strong> {user.email}</strong></p>
                <p>Github:<strong> {user.github}</strong></p>
                <p>Nivel:<strong> {user.level === 0 ? 'Iniciante' : 'Programador'}</strong></p>
        
                <Link to='/' className='BackButton'>Voltar</Link>
            </C.Info>
            <Footer/>
           </C.Area>
          
           
           
           
          
        </C.Container>
        
    )
}