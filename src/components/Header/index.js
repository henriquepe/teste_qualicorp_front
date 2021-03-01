import React from 'react';

import { Container } from './styles';



const Header = ({text, children}) => {


    return (
        <Container>
            {children}
            <h1>{text}</h1>
            
        </Container>
    )
}

export default Header;