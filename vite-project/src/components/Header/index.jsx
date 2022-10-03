import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

export function Header({ showProducts }){
    return (
        <header>
            <Logo />
            <InputSearch showProducts={showProducts} />
        </header>
    )
}