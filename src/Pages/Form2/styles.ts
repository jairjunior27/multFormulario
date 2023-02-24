import styled from "styled-components";

export const Container = styled.div`
h1{
    font-size:26px;
    padding: 10px 0;
}

p{
    font-size:13px;
    margin-bottom: 10px;
}

hr{
    margin: 20px 0;
}

.BackButton{
    padding: 20px 40px;
    text-decoration: none;
    cursor:pointer;
    font-weight: bold;
    color: #ff0000;
}

button{
    padding: 20px 40px;
    margin: 20px 0;
    border-radius: 20px;
    border: 0;
    cursor: pointer;
    color: #fff;
    background-color: #00008B;
    font-weight: bold; 
}

@media(max-width: 460px){
   h1{
    font-size:20px;
   }

   .BackButton{
    padding: 20px 20px;
    margin-right: 20px;
   }
}
@media(max-width: 360px){
   h1{
    font-size:17px;
   }
}

`