const textBox = document.querySelector("#text")
const valueBox = document.querySelector("#value")
const submitButton = document.querySelector("#submitButton")
const historyBox = document.querySelector("#historyBox")
const inflowValue = document.querySelector("#inflowValue")
let inflowContainer = 0 
const outflowValue = document.querySelector("#outflowValue")
let outflowContainer = 0 
const balanceValue = document.querySelector("#balanceValue")
let balanceDisplay = ""
let deleteButtons = []
submitButton.addEventListener("click",()=>{
    if(
        !textBox.value ||
        !isNaN(textBox.value)){
        textBox.style.border = "2px solid red"
        textBox.style.boxShadow = "0px 0px 5px 1px red"
    }
    else{
        textBox.style.border = "2px solid lime"
        textBox.style.boxShadow = "0px 0px 5px 1px lime"
    }
    if(isNaN(valueBox.value) || 
    valueBox.value == ""){
        valueBox.style.border = "2px solid red"
        valueBox.style.boxShadow = "0px 0px 5px 1px red"
    }
    else{
        valueBox.style.border = "2px solid lime"
        valueBox.style.boxShadow = "0px 0px 5px 1px lime"
    }
    if(valueBox.style.border == "2px solid lime" &&
    textBox.style.border == "2px solid lime"){
        const historicItem = document.createElement("div")
        historicItem.setAttribute("class","historicItem")
        const historicContent = document.createElement("div")
        historicContent.setAttribute("class","historicContent")
        const deleteButton = document.createElement("div")
        deleteButton.setAttribute("class","deleteButton")
        const change = document.createElement("div")
        change.setAttribute("class","change")
        historyBox.append(historicItem)
        historicItem.append(historicContent)
        historicItem.append(change)
        historicItem.append(deleteButton)
        deleteButton.textContent = "X"
        change.textContent = valueBox.value + "$"
        historicContent.textContent = textBox.value
        if(valueBox.value < 0){
            outflowContainer += parseInt(valueBox.value)
            outflowValue.textContent = "$" + outflowContainer
            }
        else if(valueBox.value > 0){
            inflowContainer += parseInt(valueBox.value)
            inflowValue.textContent = "$" + inflowContainer
        }
        console.log(inflowContainer,outflowContainer)
        balanceDisplay = inflowContainer + outflowContainer
        balanceValue.textContent = "$" + balanceDisplay
        deleteButtons.push(historicItem)
        deleteButtons.forEach((button)=>{
            console.log("432")
            button.addEventListener("click",()=>deleteButtonFunc(button))
        })
    }
})
function deleteButtonFunc(button){
    let index = deleteButtons.indexOf(button)
    console.log(index)
    const historicItems = document.querySelectorAll(".historicItem")
    const changes = document.querySelectorAll(".change")
    let rechange = changes[index].textContent.split("$")[0]
    if(rechange < 0){
        outflowContainer -= parseInt(rechange)
        outflowValue.textContent = "$" + outflowContainer
    }
    else if(rechange > 0){
        inflowContainer -= parseInt(rechange)
        inflowValue.textContent = "$" + inflowContainer
    }
    balanceDisplay = inflowContainer - outflowContainer
    balanceValue.textContent = "$" + balanceDisplay
    let deleted = historicItems[index]
    deleted.remove()
    deleteButtons.splice(index,1)
}   