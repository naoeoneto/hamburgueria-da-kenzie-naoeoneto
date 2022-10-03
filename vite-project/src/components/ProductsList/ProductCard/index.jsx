import { ProductInfo } from "./styles";

export function ProductCard({ product, handleClick }){
    
    return (
        <ProductInfo>
            <figure>
                <img src={product.img} alt="" />
            </figure>
            <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <h4>R${product.price.toFixed(2)}</h4>
            </div>
            <button id={product.id} onClick={() => handleClick(product.id)}>Adicionar</button>
        </ProductInfo>
    );
}