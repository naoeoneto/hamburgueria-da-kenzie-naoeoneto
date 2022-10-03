import { CartItem } from "./styles"

export function CartProduct({ cartProduct, currentSale, setCurrentSale, counter, addNumber, decreaseNumber }){
    
    function removeProduct(id){
        setCurrentSale(currentSale.filter((product) => product.id !== id))
    }

    return (
        <CartItem>
            <figure>
                <img src={cartProduct.img} alt={cartProduct.name} />
            </figure>
            <div>
                <h4>{cartProduct.name}</h4>
                <p>{cartProduct.price}</p>
            </div>
            <div>
                <button onClick={decreaseNumber}>-</button>
                <span>{counter}</span>
                <button onClick={addNumber}>+</button>
            </div>
            <button id={cartProduct.id} onClick={() => removeProduct(cartProduct.id)}>Remover</button>
        </CartItem>
    )
}