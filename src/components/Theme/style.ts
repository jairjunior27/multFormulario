import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px;

`
export const Area = styled.div`
max-width: 980px;
margin: auto;
min-height: 100vh;
display: flex;
flex-direction: column;
`
export const Steps = styled.div`
display: flex;

@media (max-width: 740px){
    flex-direction: column;
}
`
export const Sidebar = styled.div`
width:250px;
border-right: 2px solid #000;
@media (max-width: 740px){
    border-top: 2px solid #000;
    margin-top: 10px;
    border-right: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
 }

 @media (max-width: 520px){
    flex-direction: column;
    border-top: none;
    border-right: 2px solid #000;
   
 }

`
export const Pages = styled.div`
flex: 1;
padding: 30px 0 0 40px;
@media(max-width: 400px){
    padding: 30px 20px;
   
}
`