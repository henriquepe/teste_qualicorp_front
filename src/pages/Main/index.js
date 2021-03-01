import React, {  useEffect, useState, useRef } from 'react';

import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Customer from '../../components/Customer';
import Input from '../../components/Input';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


import { Container, ButtonComponent, HeaderCustomer, UpdateButton, DeleteButton, MainCustomerDataContainer } from './styles';
import { celularMask, cpfMask } from '../../Masks';



const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(7),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
  }))(MuiDialogActions);



const Main = () => {

    const [customers, setCustomers] = useState([])
    const [open, setOpen] = React.useState(false);
    const formRef = useRef();

    

    

    const [cpfValue, setCPFValue] = useState('')
    const [celularValue, setCelularValue] = useState('')

    const handleChangeCPF = (e) => {
      setCPFValue(cpfMask(e.target.value))
    }

    const handleChangeCelular = (e) => {
      setCelularValue(celularMask(e.target.value))
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {

      setOpen(false)

    };

    const handleFormSubmit = async(data) => {

      
      if(data.nome === "" || data.cpf === "" || data.email === "" || data.celular === "" || data.rua === "" || data.cidade === "" || data.estado === ""){
        alert('Preencha todos os campos para criar um cliente')
        return;
      }

      setOpen(false)
      
      await api.post('/customers/create', {
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        celular: data.celular,
        endereco: {
          rua: data.rua,
          cidade: data.cidade,
          estado: data.estado
        }
      })

      

      const response = await api.get('/customers')

      setCustomers(response.data)

      setCPFValue('')
      setCelularValue('')
      
    }

    


    useEffect(() => {

      api.get('/customers').then(response => {

          setCustomers(response.data);
      });

    }, [customers])



    return (
        <Container>
            <Header text="Clientes"/>
            <ButtonComponent style={{marginTop: 20}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Adicionar cliente
            </ButtonComponent>

                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Cliente
                    </DialogTitle>
                    <Form ref={formRef} onSubmit={handleFormSubmit}>
                      <DialogContent dividers>
                          
                            <Input name="nome"  placeholder="Digite o nome do cliente" />
                            <Input name="cpf"  value={cpfValue} onChange={handleChangeCPF} placeholder="Digite o cpf do cliente" />
                            <Input name="email"  placeholder="Digite o email do cliente" />
                            <Input name="celular"  value={celularValue} onChange={handleChangeCelular} placeholder="Digite o celular do cliente" />
                            <Input name="rua"   placeholder="Digite a rua do cliente" />
                            <Input name="cidade"  placeholder="Digite a cidade do cliente" />
                            <Input name="estado"  placeholder="Digite o estado do cliente" />

                                            
                          
                            
                      </DialogContent>
                      <DialogActions>

                        <Button type='submit' autoFocus color="primary">
                          Adicionar cliente
                        </Button>
                      
                      </DialogActions>
                    </Form>
                    
                </Dialog>

            
            {customers.map((item) => {
                return (
                  <ul style={{width: '100%'}}>
                    <li style={{display: 'flex', listStyleType: 'none'}} key={item._id}>
                      <div>
                        <HeaderCustomer>
                        <UpdateButton type="button" >
                          <Link style={{textDecoration: 'none', color: '#000'}} to={`/customer/${item._id}`}>
                            
                                Atualizar
                          </Link>
                        </UpdateButton>
                          
                

                          <MainCustomerDataContainer >
                              <h3>{item.nome}</h3>
                              <p>CPF: {cpfMask(item.cpf)}</p>
                          </MainCustomerDataContainer>

                          <DeleteButton type="button" onClick={async() => {
                            await api.delete(`/customers/delete/${item._id}`)
                            const customers = await api.get('/customers')

                            setCustomers(customers.data);
                          }}>
                              Deletar
                          </DeleteButton>
                        </HeaderCustomer>
                      </div>
                      <Customer cpf={item.cpf} nome={item.nome} email={item.email} rua={item.endereco.rua} cidade={item.endereco.cidade} estado={item.endereco.estado} celular={item.celular}/>
                    </li>
                  </ul>
                )
            })}
        </Container>
        
    )
}

export default Main;
