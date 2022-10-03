import { Total } from "./styles"

export function CartTotal({ currentSale, setCurrentSale, notifyWarning, cartTotal }){
    function cleanCart(){
        notifyWarning()
        setCurrentSale([])
    }

    const totalProducts = (currentSale.reduce((acc, cur) => acc + (cur.price * cur.count), 0)).toFixed(2)
    console.log(totalProducts)
    return (
        <Total>
            <div>
                <p className="totalName">Total</p>
                <p className="total">R${totalProducts}</p>
            </div>
            <button onClick={cleanCart}>Remover Todos</button>
        </Total>
    )
}