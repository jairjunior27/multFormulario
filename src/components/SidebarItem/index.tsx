import { Link } from 'react-router-dom';
import * as C from './style'
import IconProfile from '../../assets/profile.svg'
import IconBook from '../../assets/book.svg'
import IconMail from '../../assets/mail.svg'



type props ={
    title:string;
    description:string;
    icon:string;
    path:string;
    active:boolean;
}

export const SidebarItem = ({title,description,icon,path,active}: props) =>{
      return(
        <C.Container>
         <Link to={path}>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
            <C.IconArea active={active}>
                {icon === 'profile' && <img src={IconProfile} width={24}alt=""  />}
                {icon === 'book' && <img src={IconBook} width={24}alt="" />}
                {icon === 'mail' && <img src={IconMail} width={24}alt="" />}
            </C.IconArea>
            <C.Point active={active}></C.Point>
         </Link>
        
        </C.Container>
      )
}