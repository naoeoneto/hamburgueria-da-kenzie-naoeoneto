import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { MyHeader } from "./styles";

export function Header({ showProducts }){
    return (
        <MyHeader>
            <Logo />
            <InputSearch showProducts={showProducts} />
        </MyHeader>
    )
}