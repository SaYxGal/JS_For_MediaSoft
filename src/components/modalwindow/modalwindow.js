import './modalwindow.scss'
const ModalWindow = () =>{
    const modalWin = document.createElement('modal')
    const exitButton = document.createElement('button')
    const textSpan = document.createElement('span')
    const tableCart = document.createElement('table')
    const upperPart = document.createElement('div')
    tableCart.innerHTML = "<tr> <th> ID </th> <th> Название </th> <th> Цена </th> </tr>"
    tableCart.className = 'modalwindow__table'
    modalWin.className = 'modalwindow'
    upperPart.className = 'modalwindow__div'
    textSpan.className = 'modalwindow__div__text'
    textSpan.innerText = 'Ваша корзина'
    exitButton.innerText = 'X'
    exitButton.className = 'modalwindow__div__exit'
    exitButton.addEventListener('click', ()=>{
        modalWin.style.display = 'none'
    })
    upperPart.appendChild(textSpan)
    upperPart.appendChild(exitButton)
    modalWin.appendChild(upperPart)
    modalWin.appendChild(tableCart)
    return modalWin
}
export default ModalWindow