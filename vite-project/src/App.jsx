import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductList } from './components/ProductsList'
import { api } from './services/api'
import { GlobalStyle } from './styles/global'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './styles/container'

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [inputValue, setInputValue] = useState("")

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
  
  return (
    <Container>
      <GlobalStyle />
      <Header
      setInputValue={setInputValue}
      />
      <div className='homeSections'>
        <ProductList 
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        notifySuccess={notifySuccess}
        notifyInfo={notifyInfo}
        setCartTotal={setCartTotal}
        inputValue={inputValue}
        />
        <Cart 
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          notifyInfo={notifyInfo}
          notifyRemove={notifyRemove}
          notifyWarning={notifyWarning}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal} 
          />
        </div>
        <ToastContainer />
    </Container>
  )
}

export default App