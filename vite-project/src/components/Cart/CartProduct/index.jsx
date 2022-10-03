// import { useEffect, useState } from "react"
import { CartItem } from "./styles"

export function CartProduct({ cartProduct, currentSale, setCurrentSale, notifyRemove, notifyInfo, cartTotal, setCartTotal }){

    function removeProduct(id){
        notifyRemove()
        setCurrentSale(currentSale.filter((product) => product.id !== id))
    }

    function addNumber(){
        notifyInfo()
        setCartTotal(cartProduct.count += 1)
    }
    
    function decreaseNumber(){
      if(cartProduct.count > 1){
        notifyInfo()
        setCartTotal(cartProduct.count -= 1)
      }
    }

    console.log(cartTotal)

    return (
        <CartItem>
            <figure>
                <img src={cartProduct.img} alt={cartProduct.name} />
            </figure>
            <div className="cardInfo">
                <h4>{cartProduct.name}</h4>
                <p>{cartProduct.category}</p>
            </div>
            <div className="cardAmount">
                <h5 id={cartProduct.id} onClick={() => removeProduct(cartProduct.id)}>Remover</h5>
                <div>
                    <span onClick={decreaseNumber}>-</span>
                    <p>{cartProduct.count}</p>
                    <span onClick={addNumber}>+</span>
                </div>
            </div>
        </CartItem>
    )
}