import { ProductCard } from "./ProductCard"
import { List } from "./styles"

export function ProductList({ products, currentSale, setCurrentSale, counter, setCounter, notifySuccess, notifyInfo }){   

    // function showProducts(product){
    //     const filtered = products.filter(elem => elem.name.toLowerCase().includes(product))
    //     console.log(product, filtered)
    //     setFilteredProducts(filtered)
    //     }
    //     // console.log(currentSale)

    

    function handleClick(productId){
        const item = products.find(elem => elem.id === productId)
        if(currentSale.includes(item)){
            notifyInfo()
            setCounter(counter + 1)
        } else {
            notifySuccess()
            setCurrentSale([...currentSale, item])
        }
    }

    return (
        <List>
            {products.map(product => 
                 <ProductCard key={product.id} product={product} handleClick={handleClick}/>
            )}
        </List>
    )
}