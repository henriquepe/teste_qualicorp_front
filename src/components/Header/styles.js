import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: #272A38;
    color: #fff;

    a {
        transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }
    }


`;