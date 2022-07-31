import './items-list.scss'
const ItemsList = (generateItems) => {
    const ItemListElement = document.createElement('div')
    const ItemsElement = document.createElement('div')
    const SortElement = document.createElement('div')
    const SliderElement = document.createElement('input')
    const TextElem = document.createElement('span')
    const ValuePrice = document.createElement('span')
    const TextElemtwo = document.createElement('span')
    const TextElemthree = document.createElement('span')
    const InputTextElement = document.createElement('input')
    const RadioButtonOne = document.createElement('input')
    const TextElemfourth = document.createElement('span')
    const RadioButtonTwo = document.createElement('input')
    const TextElemfifth = document.createElement('span')
    const RadioGroup = document.createElement('div')
    const ApproveFilter = document.createElement('button')
    const ClearFilter = document.createElement('button')
    const MessageSpan = document.createElement('span')
    let currentStateOfSort = 0
    ApproveFilter.className = 'items-list__sortPanel__approveFil'
    ApproveFilter.innerText = 'Применить'
    ClearFilter.className = 'items-list__sortPanel__clearFil'
    ClearFilter.innerText = 'Сбросить'
    ValuePrice.className = 'items-list__sortPanel__currentprice'
    TextElem.className = 'items-list__sortPanel__textone'
    TextElem.innerText = 'Установите максимальную цену:'
    TextElemtwo.innerText = 'Поиск (введите слово или букву)'
    TextElemtwo.className = 'items-list__sortPanel__texttwo'
    TextElemthree.innerText = 'Сортировать по:'
    TextElemthree.className = 'items-list__sortPanel__textthree'
    TextElemfourth.innerText = 'возрастанию цены'
    TextElemfifth.innerText = 'убыванию цены'
    ValuePrice.innerText = 'Текущее значение: 5000'
    SliderElement.addEventListener('change',()=>{
        ValuePrice.innerText = `Текущее значение: ${SliderElement.value}`
    })
    ApproveFilter.onclick = function(){
        generateItems(true, currentStateOfSort)
        MessageSpan.innerText = 'Применена сортировка и фильтр'
        SortElement.appendChild(MessageSpan)
        setTimeout(()=>{
            SortElement.removeChild(MessageSpan)
        },2000)
        ApproveFilter.disabled = true
        ClearFilter.disabled = true
        setTimeout(()=>{
            ApproveFilter.disabled = false
            ClearFilter.disabled = false
        },2000)
    }
    ClearFilter.onclick = function(){
        currentStateOfSort = 0
        generateItems(false, currentStateOfSort)
        RadioButtonOne.checked = true
        SliderElement.value = 5000
        ValuePrice.innerText = 'Текущее значение: 5000'
        InputTextElement.value = ''
        MessageSpan.innerText = 'Сброшена сортировка и отключен фильтр'
        SortElement.appendChild(MessageSpan)
        setTimeout(()=>{
            SortElement.removeChild(MessageSpan)
        },2000)
        ApproveFilter.disabled = true
        ClearFilter.disabled = true
        setTimeout(()=>{
            ApproveFilter.disabled = false
            ClearFilter.disabled = false
        },2000)
    }
    const FiltFunction = (name, price) =>{
        if(price <= Number(SliderElement.value)){
            if(InputTextElement.value == "" || name.includes(InputTextElement.value)){
                return true;
            }
        }
        return false;
    }
    RadioButtonOne.onclick = function(){
        currentStateOfSort = 0
    }
    RadioButtonTwo.onclick = function(){
        currentStateOfSort = 1
    }
    SliderElement.className = 'items-list__sortPanel__slider'
    SliderElement.type = 'range';
    SliderElement.min = 1;
    SliderElement.max = 10000;
    SliderElement.value = 5000;
    InputTextElement.type = 'text'
    InputTextElement.className = 'items-list__sortPanel__search'
    RadioButtonOne.type = 'radio'
    RadioButtonOne.checked = true
    RadioButtonTwo.type = 'radio'
    RadioButtonOne.name = 'sort'
    RadioButtonTwo.name = 'sort'
    RadioGroup.className = 'items-list__sortPanel__group'
    ItemsElement.className = 'items-list__items'
    SortElement.className = 'items-list__sortPanel'
    ItemListElement.className = 'items-list'
    RadioGroup.appendChild(RadioButtonOne)
    RadioGroup.appendChild(TextElemfourth)
    RadioGroup.appendChild(RadioButtonTwo)
    RadioGroup.appendChild(TextElemfifth)
    SortElement.appendChild(TextElem)
    SortElement.appendChild(SliderElement)
    SortElement.appendChild(ValuePrice)
    SortElement.appendChild(TextElemtwo)
    SortElement.appendChild(InputTextElement)
    SortElement.appendChild(TextElemthree)
    SortElement.appendChild(RadioGroup)
    SortElement.appendChild(ClearFilter)
    SortElement.appendChild(ApproveFilter)
    ItemListElement.appendChild(ItemsElement)
    ItemListElement.appendChild(SortElement)
    return {ItemListElement, FiltFunction}
};

export default ItemsList