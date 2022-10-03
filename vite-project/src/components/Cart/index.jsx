import { CartProduct } from "./CartProduct"
import { CartTotal } from "./CartTotal"
import { CartList } from "./styles"

export function Cart({ currentSale, setCurrentSale, counter, addNumber, decreaseNumber, notifyRemove, notifyWarning }){

    return (
        <CartList>
            <h2>Carrinho de Compras</h2>
            <main>
                {currentSale.length ? (
                    <ul>
                        {(currentSale.map((product, index) => (
                            <CartProduct 
                            key={index} 
                            cartProduct={product}
                            currentSale={currentSale} 
                            setCurrentSale={setCurrentSale}
                            counter={counter}
                            addNumber={addNumber}
                            decreaseNumber={decreaseNumber}
                            notifyRemove={notifyRemove}
                            />)
                    ))}   
                        <CartTotal 
                        currentSale={currentSale} 
                        setCurrentSale={setCurrentSale}
                        counter={counter} 
                        notifyWarning={notifyWarning}
                        />
                    </ul>
                ) : (
                    <div>
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </div>
                )} 
            </main>
        </CartList>
    )
}
