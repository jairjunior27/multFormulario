import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  margin: 30px 0;

  a{
    display: flex;
    text-decoration: none;
    align-items: center;
  }

  @media (max-width: 740px){
    margin: 30px 20px;
   
   flex: 1;

}




`
export const Info = styled.div`
flex: 1;
margin-right: 20px;

@media (max-width: 740px){
    margin-right: 7px;
}
@media (max-width: 520px){
    margin-right: 30px;
}


`
export const Title = styled.div`
text-align: right;
font-weight: bold;
font-size: 15px;
margin-bottom: 15px;
color: #00008B;

@media (max-width: 740px){
    margin-bottom: 10px;
    text-align:left;
}

@media (max-width: 520px){
    text-align: right;
    font-size:20px;
    
}

`
export const Description = styled.div`
text-align: right;
font-size: 13px;
color: #000;

@media (max-width: 740px){
    font-size: 11px;
    text-align:left;
}
@media (max-width: 520px){
    text-align: center;
    font-size:15px;
    
}
`
export const IconArea = styled.div<{active:boolean}>`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.active ? '#25CD89' : '#ADD8E6'};

@media (max-width: 600px){
  width: 40px;
  height: 40px;
     
 }

 @media (max-width: 520px){
    width: 60px;
  height: 60px;
    
}
`

export const Point = styled.div<{active:boolean}>`
width: 10px;
height: 10px;
border-radius: 50%;
border: 3px solid #494A7C;
margin-left: 30px;
margin-right: -6px;
background-color: ${props => props.active ? '#25CD89' : '#02044A'};

@media (max-width: 740px){
    margin-top: -113px;
    position: absolute;
    
}
@media (max-width: 600px){
    margin-top: -105px;
    position: absolute;
    
}

@media(max-width: 520px){
    position: absolute;
    right: 0;
    width: 10px;
   height: 10px;
   margin-right: -6px;
}

`