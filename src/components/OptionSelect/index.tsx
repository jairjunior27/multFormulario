import * as C from './style'


type props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: ()=> void
}

export const OptionSelect =({title,description,icon,selected,onClick}:props) =>{
    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}