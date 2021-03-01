import React, {useRef, useEffect} from 'react';


import { useField } from '@unform/core';

import { Container, InputComponent } from './styles'


const Input = ({type, name, placeholder, value,...rest}) => {

    const inputRef = useRef();
    const { fieldName, defaultValue, registerField } = useField(name)

    useEffect(() => {

        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })

    }, [fieldName, registerField])

    return (
        <Container>
            <label for={name}>{name}</label>
            <InputComponent value={value} defaultValue={defaultValue} ref={inputRef} name={name} type={type} placeholder={placeholder} {...rest} />
        </Container>
    )
  }
  export default Input

