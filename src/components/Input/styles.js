import styled from 'styled-components';





export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 500px;

    label {
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    & + div {
        margin-top: 10px;
    }

    @media (max-width: 500px) {
        width: 100%;
        overflow-x: hidden;
    }


`;

export const InputComponent = styled.input`

    border: 0;
    border-bottom: 1px solid #272a38; 
    



`;