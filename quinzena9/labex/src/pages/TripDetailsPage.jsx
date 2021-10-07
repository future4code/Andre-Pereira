import React from 'react'
import { useHistory } from 'react-router';

export default function TripDetailsPage() {
const history = useHistory()

const irInicio = () => {
    history.push("/")
}



    return (
        <div>
            <p>Detalhes da Viagem</p>
            <button onClick={irInicio}>Ínicio</button>
            <button>Salvar</button>

        </div>
    )
}
