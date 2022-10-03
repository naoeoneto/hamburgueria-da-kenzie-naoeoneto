export function CartTotal({ currentSale, setCurrentSale, counter, notifyWarning }){
    function cleanCart(){
        notifyWarning()
        setCurrentSale([])
    }
    
    return (
        <div>
            <p>Total</p>
            <p>
                R${currentSale.reduce((acc, cur) => acc + (cur.price * counter), 0)}
            </p>
            <button onClick={cleanCart}>RemoverTodos</button>
        </div>
    )
}