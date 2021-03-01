import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

export const ButtonComponent = styled(Button)`

    transition: 0.3s;

    &:hover {
        background-color: #272a38;
        border-color: #272a38;
        color: #fff;
    }


`

export const Container = styled.div`


    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: transparent;
    margin-top: 40px;



    div {
        height: 100%;
    }

`;


export const PaperContainer = styled(Paper)`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    text-align: center;

    label {
            color: #000;
            text-transform: uppercase;
            margin-top: 10px;
        }



    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 20px;
        width: 100%;
        height: 45px;

    

        background: #6272a4;

        

        p {
            color: #fff;
        }


    }



`;

export const MainCustomerDataContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 24px;
        font-weight: bold;
    }

    p {
        font-size: 14px;
    }


`;


export const DeleteButton = styled.button`

    width: 90px !important;
    background: #ff5555 !important;
    border: 0 !important;
    border-radius: 20px !important;
    font-size: 16px !important;
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