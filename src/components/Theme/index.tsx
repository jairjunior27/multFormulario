import * as C from './style'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { SidebarItem } from '../SidebarItem'
import { useAppSelector } from '../../redux/Hooks/useAppSelector'


type props ={
 children: React.ReactNode
}

export const Theme = ({children}:props) =>{
    const user = useAppSelector(state=> state.user)
    return(
        <C.Container>
            <C.Area>
                <Header/>
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path = '/'
                          active={user.currentStep === 1}
                        />
                        <SidebarItem
                        title="Profissional"
                        description="Seu nivel"
                        icon="book"
                        path = '/step2'
                        active={user.currentStep === 2}
                        />
                        <SidebarItem
                        title="Contatos"
                        description="Como te achar"
                        icon="mail"
                        path = '/step3'
                        active={user.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Pages>{children}</C.Pages>
                </C.Steps>
                <Footer/>
            </C.Area>
        </C.Container>
    )
}