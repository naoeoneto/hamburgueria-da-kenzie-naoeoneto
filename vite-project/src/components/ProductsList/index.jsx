import { ProductCard } from "./ProductCard"
import { List } from "./styles"

export function ProductList({ products, currentSale, setCurrentSale, notifySuccess, notifyInfo, setCartTotal, inputValue }){     
    const filtered = products.filter(elem => elem.name.toLowerCase().includes(inputValue) || elem.category.toLowerCase().includes(inputValue))

    function handleClick(productId){
        const item = products.find(elem => elem.id === productId)
        item.count = 1

        if(currentSale.includes(item)){
            notifyInfo()
            console.log(item.count)
            setCartTotal(item.count += 1)
        } else {
            notifySuccess()
            setCurrentSale([...currentSale, item])
            console.log(item)
        }
    }

    return (
        <List>
            {filtered.length ? (
                filtered.map(product => (
                    <ProductCard key={product.id} product={product} handleClick={handleClick}/>
                ))
            ) : (
                products.map(product => (
                    <ProductCard key={product.id} product={product} handleClick={handleClick}/>
                ))
            )}
        </List>
    )
}