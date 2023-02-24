import * as C from './styled'
import erro404 from '../../assets/erro404.png'


export const NotFound = () =>{
    return(
        <C.Container>
            
        {<img src={erro404} width={200} alt="imagem notFound" />}
        </C.Container>
    )
}