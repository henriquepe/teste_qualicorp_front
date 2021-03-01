import { Button } from '@material-ui/core';
import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {

        display: flex;
        width: 100%;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background: transparent;
        margin-top: 40px;

       

        
        
    }

    li {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 950px;
        padding-left: 20px;
        padding-right: 20px;



       
    }

    
    

`;

export const HeaderCustomer = styled.div`

    
    display: flex;
    background: #272A38;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
    position: relative;
    top: 45px;
    justify-content: space-between;
    


`;

export const FormContainer = styled.div`

    padding-top: 30px;
    
   
    input {
        background: transparent;
        border: 1px solid #272A38;
        height: 30px;
        color: #ccc;

        padding-left: 5px;

        & + input {
            margin-left: 10px;
        }

    }

    button {


        background: transparent;
        border: 1px solid #ccc;
        height: 30px;
        color: #ccc;

        padding-left: 5px;
        padding-right: 5px;

        margin-left: 10px;
    }

`;

export const ButtonComponent = styled(Button)`

    transition: 0.4s !important;
    

    &:hover {
        background-color: #6272a4 !important;
        border-color: #6272a4 !important;
        color: #fff;
    }


`

export const MainCustomerDataContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
        font-size: 16px;
        padding-bottom: 10px;
        font-weight: bold;
    }

    p {
        font-size: 14px;
    }


`;





export const DeleteButton = styled(Button)`

    width: 90px !important;
    background: #ff5555 !important;
    border: 0 !important;
    border-radius: 20px !important;
    font-size: 14px !important;
    color: #000 !important;
    font-weight: bold !important;

`;

export const UpdateButton = styled(Button)`

    width: 90px !important;
    background: #50fa7b !important;
    border: 0 !important;
    border-radius: 20px !important;
    font-size: 14px !important;
    color: #000 !important;
    font-weight: bold !important;

`;