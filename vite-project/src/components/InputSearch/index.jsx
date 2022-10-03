import { useState } from "react"

export function InputSearch({ showProducts }){
    const [inputValue, setInputValue] = useState("")
    
    return (
        <>
            <input
            onChange={(event) => setInputValue(event.target.value)} 
            type="text"
            placeholder="Digite o nome do produto"
             />
            <button onClick={() => showProducts(inputValue)}>Pesquisar</button>
        </>
    )
}