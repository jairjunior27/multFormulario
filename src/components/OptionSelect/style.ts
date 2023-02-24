import styled from "styled-components";

export const Container = styled.div<{selected: boolean}>`
display: flex;
margin-bottom:15px;
padding: 20px;
border: 2px solid ${props => props.selected ? '#00008B' : '#000'};
border-radius: 10px;
align-item: center;
cursor: pointer;
`
export const Icon = styled.div`
width: 50px;
heigth: 50px;
display: flex;
align-items: center;
justify-content: center;

border-radius:50%;
font-size: 35px;
`
export const Info = styled.div`
margin-left: 10px;
flex:1;
`
export const Title = styled.div`
font-size: 17px;
font-weight: bold;
margin-bottom: 5px;

@media(max-width: 330px){
   font-size: 14px;
 }
`
export const Description = styled.div`
font-size: 13px;
@media(max-width: 330px){
    font-size: 12px;
  }
`