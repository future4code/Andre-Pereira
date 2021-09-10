import React from 'react'
import { useHistory } from 'react-router';

export default function ApplicationFormPage() {
const history = useHistory()

const irInicio = () => {
    history.goBack("/")
}

const irListaViagens = () => {
    history.push("/list-trips")
}

    return (
        <div>
            <p>Formulário do Candidato</p>
            <button onClick={irInicio} >Ínicio</button>
            <button onClick={irListaViagens} >Lista de Viagens</button>

        </div>
    )
}
