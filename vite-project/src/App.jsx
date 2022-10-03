import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductList } from './components/ProductsList'
import { api } from './services/api'
import { GlobalStyle } from './styles/global'

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  function notifySuccess(){
    toast.success('Produto adicionado ao carrinho', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function notifyRemove(){
    toast.error('Produto removido do carrinho', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function notifyInfo(){
    toast.info('Quantidade alterada', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function notifyWarning(){
    toast.warn('Carrinho limpo', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function addNumber(){
    notifyInfo()
    setCounter(counter + 1)
  }

  function decreaseNumber(){
    notifyInfo()
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
        notifySuccess={notifySuccess}
        notifyInfo={notifyInfo}
        />
      </section>
        <Cart 
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          counter={counter}
          addNumber={addNumber}
          decreaseNumber={decreaseNumber}
          notifyRemove={notifyRemove}
          notifyWarning={notifyWarning} 
          />
        <ToastContainer />
    </div>
  )
}

export default App

// - Para informar ao usuário que o item já foi adicionado ao carrinho, 
// ao invés de utilizar um alert (uma má prática em React), 
// pode-se utilizar um Toast de bibliotecas como React-toastify ou react-hot-toast;