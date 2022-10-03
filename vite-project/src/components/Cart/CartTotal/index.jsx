export function CartTotal({ currentSale, setCurrentSale, counter }){
    return (
        <div>
            <p>Total</p>
            <p>
                R${currentSale.reduce((acc, cur) => acc + (cur.price * counter), 0)}
            </p>
            <button onClick={() => setCurrentSale([])}>RemoverTodos</button>
        </div>
    )
}