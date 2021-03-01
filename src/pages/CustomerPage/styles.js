import styled from 'styled-components';


export const Container = styled.div`
    
    flex-direction: column;

    div > {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70px;
        background-color: #272A38;
        color: #fff;
        

        a  {
            position: absolute;
            left: 10px;
            color: #fff;
            text-decoration: none;
    }
    
    }
    
    Form {
        display: flex;
        padding: 30px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;


        Input {
            background: transparent;
            color: #fff;


           margin-bottom: 20px;
        }
    }
`;


export const Button = styled.button`
    margin-top: 10px;
    width: 500px;
    height: 40px;
    background: #50fa7b;
    bordeR: 0;
    border-radius: 20px;

    @media (max-width: 500px) {
        width: 100%;
        overflow-x: hidden;
    }


`;