import { useState } from 'react'

const useForm = (estadoInicial) => {
    const [formulario, setFormulario] = useState(estadoInicial);

    const alterarDadosFormulario = (event) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const clean = () => {
        setFormulario(estadoInicial)
    }

    return { formulario, alterarDadosFormulario, clean }
};

export default useForm