import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../components/Input';
import Header from '../../components/Header'

import {Link} from 'react-router-dom'

import {celularMask, cpfMask} from '../../Masks'

import api from '../../services/api';

import {Form} from '@unform/web';

import { Container,  Button } from './styles';

const CustomerPage = () => {

    const [documentCPF, setDocumentCPF] = useState('')
    const [celular, setCelular] = useState('')

    const {id} = useParams();

    const handleSubmit = async(data) => {

        console.log(data);
        console.log(typeof data.cpf)
        await api.put(`/customers/update/${id}`, {
            nome: data.nome,
            cpf: data.cpf !== null && data.cpf,
            celular: data.celular,
            email: data.email,
            endereco: {
                rua: data.rua,
                cidade: data.cidade,
                estado: data.estado
            }
        })
    }

    const handleCPFchange = (e) => {

        const formatedCPF = cpfMask(e.target.value)
        setDocumentCPF(formatedCPF)
    }

    const handleCelularchange = (e) => {

        const formatedCelular = celularMask(e.target.value)
        setCelular(formatedCelular)
    }



    return (
        <Container>
            <Header text="Atualizar Cliente">
                <Link to="/">Voltar</Link>
                
            </Header>

            <Form onSubmit={handleSubmit}>
                <Input name="nome" placeholder="Digite o novo nome"/>
                <Input name="cpf" value={documentCPF} onChange={handleCPFchange} placeholder="Digite o novo cpf"/>
                <Input name="email" placeholder="Digite o novo email"/>
                <Input name="celular" value={celular} onChange={handleCelularchange} placeholder="Digite o novo celular"/>
                <Input name="rua" placeholder="Digite a nova rua"/>
                <Input name="cidade" placeholder="Digite a nova cidade"/>
                <Input name="estado" placeholder="Digite o novo estado"/>
                
                <Button type='submit'>Atualizar cadastro</Button>
            </Form>
        </Container>
    )
}

export default CustomerPage;

