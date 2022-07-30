import './item.scss'
import ItemImg from'../../assets/img/item.jpg'
import ItemImg2 from'../../assets/img/item2.jpg'
import ItemImg3 from'../../assets/img/item3.jpg'
import ItemImg4 from'../../assets/img/item4.jpg'
const Item = (name, price, picture, onAdd) => {
    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'
    const nameElement = document.createElement('span')
    nameElement.className = 'item__name'
    nameElement.innerText = name
    const priceElement = document.createElement('span')
    priceElement.className = 'item__price'
    priceElement.innerText = `Цена: ${price}`
    const imgElement = document.createElement('img')
    switch(Number(picture)){
        case 1:
            imgElement.src = ItemImg
            break;
        case 2:
            imgElement.src = ItemImg2
            break;
        case 3:
            imgElement.src = ItemImg3
            break;
        case 4:
            imgElement.src = ItemImg4
            break;
        default:
            imgElement.src = ItemImg
            break;
    }
    imgElement.className = 'item__img'
    const buttonElement = document.createElement('button')
    buttonElement.className = 'item__add-button'
    buttonElement.innerText = 'Добавить'
    buttonElement.addEventListener('click', onAdd)
    ItemElement.appendChild(nameElement)
    ItemElement.appendChild(imgElement)
    ItemElement.appendChild(priceElement)
    ItemElement.appendChild(buttonElement)
    return ItemElement
};

export default Item