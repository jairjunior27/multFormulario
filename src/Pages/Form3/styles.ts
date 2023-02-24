import styled from "styled-components";

export const Container = styled.div`
h1{
    font-size:26px;
    padding: 10px 0;

    @media(max-width: 352px){
        font-size: 22px;
    }
}

p{
    font-size:14px;
    margin-bottom: 10px;
}

hr{
    margin: 20px 0;
   
}

label{
    font-size: 14px;
}

input{
    display: block;
    width: 100%;
    margin-top: 7px;
    padding: 20px 10px;
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    border: 2px solid #000;
}

.BackButton{
    padding: 20px 40px;
    text-decoration: none;
    cursor:pointer;
    font-weight: bold;
    color: #ff0000;

    @media(max-width: 400px){
        padding: 20px 20px;
    }
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

    @media(max-width: 400px){
        padding: 20px 40px
       
        
    }
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

`