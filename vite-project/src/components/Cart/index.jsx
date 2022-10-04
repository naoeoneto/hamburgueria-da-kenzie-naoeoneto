import { CartProduct } from "./CartProduct"
import { CartTotal } from "./CartTotal"
import { CartList } from "./styles"

export function Cart({ currentSale, setCurrentSale, notifyInfo, notifyRemove, notifyWarning, cartTotal, setCartTotal }){
    
    return (
        <CartList>
            <h2>Carrinho de Compras</h2>
            <main>
                {currentSale.length ? (
                    <div className="withProducts">
                        <ul>
                            {(currentSale.map((product, index) => (
                                <CartProduct 
                                key={index} 
                                cartProduct={product}
                                currentSale={currentSale} 
                                setCurrentSale={setCurrentSale}
                                notifyRemove={notifyRemove}
                                notifyInfo={notifyInfo}
                                cartTotal={cartTotal}
                                setCartTotal={setCartTotal}
                                />)
                        ))}   
                            <CartTotal 
                            currentSale={currentSale}
                            setCurrentSale={setCurrentSale}
                            notifyWarning={notifyWarning}
                            />
                        </ul>
                    </div>
                ) : (
                    <div className="noProducts">
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </div>
                )} 
            </main>
        </CartList>
    )
}
