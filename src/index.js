import ItemsList from './components/items-list'
import Item from './components/item'
import Cart from './components/cart'
import ModalWindow from './components/modalwindow'

import 'normalize.css'
import './index.scss'

const mocks = [
    {
        "id": 1,
        "name": "notebook1",
        "price": 100,
        "picture": 1
    },
    {
        "id": 2,
        "name": "notebook2",
        "price": 200,
        "picture": 2
    },
    {
        "id": 3,
        "name": "notebook3",
        "price": 300,
        "picture": 3
    },
    {
        "id": 4,
        "name": "notebook4",
        "price": 100,
        "picture": 4
    },
    {
        "id": 5,
        "name": "notebook5",
        "price": 200,
        "picture": 1
    },
    {
        "id": 6,
        "name": "notebook6",
        "price": 300,
        "picture": 3
    },
    {
        "id": 7,
        "name": "notebook7555555555555555555555",
        "price": 100,
        "picture": 3
    },
    {
        "id": 8,
        "name": "notebook8",
        "price": 200,
        "picture": 4
    },
    {
        "id": 9,
        "name": "notebook9",
        "price": 1000,
        "picture": 1
    }
]
const generateItems = (needFilter, typeOfSort) => {
    let child = ItemListElement.childNodes[0].lastElementChild
    while(child){
        ItemListElement.childNodes[0].removeChild(child)
        child = ItemListElement.childNodes[0].lastElementChild
    }
    mocks.forEach((item)=>{
        const onAdd = () =>{
            cart.push(item)
            updateCart(cart)
        }
        try{
            const itemElement = Item(item.name, item.price, item.picture, onAdd);
            if(needFilter){
                if(FiltFunction(item.name, item.price) == true){
                    ItemListElement.childNodes[0].appendChild(itemElement)
                }
            }
            else{
                ItemListElement.childNodes[0].appendChild(itemElement)
            }
        }
        catch(err){
            console.log(err.message)
        }
    })
    for(let i = 0; i < ItemListElement.childNodes[0].childNodes.length; i = i + 1){
        for(let j = 0; j < ItemListElement.childNodes[0].childNodes.length - 1; j = j + 1){
            const temp1 = ItemListElement.childNodes[0].childNodes[j].childNodes[2]
            const temp2 = ItemListElement.childNodes[0].childNodes[j+1].childNodes[2]
            if(typeOfSort == 0){
                if(Number(temp1.innerText.slice(temp1.innerText.indexOf(' '))) > Number(temp2.innerText.slice(temp2.innerText.indexOf(' ')))){
                    temp2.parentNode.after(temp1.parentNode)
                }
            }
            else{
                if(Number(temp1.innerText.slice(temp1.innerText.indexOf(' '))) < Number(temp2.innerText.slice(temp2.innerText.indexOf(' ')))){
                    temp2.parentNode.after(temp1.parentNode)
                }
            }
        }
    }
}
let cart = []
const {ItemListElement, FiltFunction} = ItemsList(generateItems)
const ModalElement = ModalWindow()
const {CartElement, updateCart} = Cart(cart, ModalElement)
document.body.appendChild(ItemListElement)
generateItems(false, 0);
document.body.appendChild(CartElement)
document.body.appendChild(ModalElement)