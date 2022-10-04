import { Form } from "./styles"

export function InputSearch({ setInputValue }){
    
    return (
        <Form>
            <input
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Digitar Pesquisa"
             />
            <span>Pesquisar</span>
        </Form>
    )
}