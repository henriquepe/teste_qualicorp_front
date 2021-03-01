import React from 'react';


import Grid from '@material-ui/core/Grid';

import { Container, PaperContainer } from './styles';


import { celularMask } from '../../Masks'



const Customer = ({ email, celular, rua, cidade, estado}) => {

    
    const formatedCelular = celularMask(celular);

    return (
        <Container>
            

        <Grid container spacing={3}>
            <Grid  item xs={12}>
                <PaperContainer style={{backgroundColor: '#ccc', padding: 20}}>
                                        
                    <label for="rua">Rua</label>
                    <div>
                        <p>{rua}</p>
                    </div>

                    <label for="cidade">Cidade</label>
                    <div>
                        
                        <p>{cidade}</p>
                    </div>

                    <label for="estado">Estado</label>
                    <div>
                        
                        <p>{estado}</p>
                    </div>

                    <label for="email">Email</label>
                    <div>
                        
                        <p>{email}</p>
                    </div>

                    <label for="celular">Celular</label>
                    <div>
                        <p>{formatedCelular}</p>
                    </div>

                    
                </PaperContainer>
            </Grid>
        </Grid>
            
        </Container>
    )
}

export default Customer;