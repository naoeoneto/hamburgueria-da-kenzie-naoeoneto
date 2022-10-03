import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductList } from './components/ProductsList'
import { api } from './services/api'
import { GlobalStyle } from './styles/global'

function App() {

  const [products, setProducts] = useState([])
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    api.get('/products/')
    .then(resp => setProducts(resp.data))
    .catch(err => console.log(err))
  }, [])

  function addNumber(){
    setCounter(counter + 1)
  }

  function decreaseNumber(){
    setCounter(counter - 1)
  }

  return (
    <div>
      <GlobalStyle />
      <Header
      //  showProducts={showProducts}
       />
      <section>
        <ProductList 
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        counter={counter}
        setCounter={setCounter}
        />
      </section>
      <Cart 
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        counter={counter}
        addNumber={addNumber}
        decreaseNumber={decreaseNumber} 
        />
    </div>
  )
}

export default App

// - Para informar ao usuário que o item já foi adicionado ao carrinho, 
// ao invés de utilizar um alert (uma má prática em React), 
// pode-se utilizar um Toast de bibliotecas como React-toastify ou react-hot-toast;