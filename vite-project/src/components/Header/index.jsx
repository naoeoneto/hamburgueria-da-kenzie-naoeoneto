import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { MyHeader } from "./styles";

export function Header({ products, setInputValue, inputValue }){
    return (
        <MyHeader>
            <Logo />
            <InputSearch 
            products={products}
            setInputValue={setInputValue}
            inputValue={inputValue}
            />
        </MyHeader>
    )
}