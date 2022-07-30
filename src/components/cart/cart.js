import './cart.scss'
const Cart = (cart, modal) =>{
    const CartElement = document.createElement('div')
    const priceElement = document.createElement('span')
    const itemsCountElement = document.createElement('span')
    const ButtonsField = document.createElement('div')
    const openCart = document.createElement('button')
    const clearCart = document.createElement('button')
    itemsCountElement.innerText = `Кол-во товаров ${cart.length}`
    priceElement.innerText = `Цена ${cart.length}`
    CartElement.className = 'cart'
    itemsCountElement.className = 'cart__count'
    priceElement.className = 'cart__price'
    openCart.innerText = 'Корзина'
    openCart.className = 'cart__info'
    clearCart.className = 'cart__clear'
    clearCart.innerText = 'Очистить корзину'
    openCart.addEventListener('click',()=>{
        modal.style.display = 'block'
    })
    clearCart.addEventListener('click', () =>{
        modal.childNodes[1].innerHTML = "<tr> <th> ID </th> <th> Название </th> <th> Цена </th> </tr>"
        priceElement.innerText = `Цена ${0}`
        itemsCountElement.innerText = `Кол-во товаров ${0}`
        cart.splice(0, cart.length)
    })
    ButtonsField.appendChild(openCart)
    ButtonsField.appendChild(clearCart)
    CartElement.appendChild(itemsCountElement)
    CartElement.appendChild(priceElement)
    CartElement.appendChild(ButtonsField)
    const updateCart = (newCart) =>{
        itemsCountElement.innerText = `Кол-во товаров ${newCart.length}`
        modal.childNodes[1].innerHTML = "<tr> <th> ID </th> <th> Название </th> <th> Цена </th> </tr>"
        const sumPrice = newCart.reduce((sum,item)=>{
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${item.id} </td> <td>${item.name} </td> <td>${item.price} </td>`
            modal.childNodes[1].appendChild(tr)
            return sum + item.price
        }, 0)
        priceElement.innerText = `Цена ${sumPrice}`
    }
    return {CartElement, updateCart}
};
export default Cart