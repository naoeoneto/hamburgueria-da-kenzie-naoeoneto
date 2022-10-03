import { useState } from "react"
import { Form } from "./styles"

export function InputSearch({ showProducts }){
    const [inputValue, setInputValue] = useState("")
    
    return (
        <Form>
            <input
            onChange={(event) => setInputValue(event.target.value)} 
            type="text"
            placeholder="Digitar Pesquisa"
             />
            <button onClick={() => showProducts(inputValue)}>Pesquisar</button>
        </Form>
    )
}