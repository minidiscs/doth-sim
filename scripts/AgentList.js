import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

const purchasingAgents = (businesses) => businesses.map(business => `<h3 class="agent--name">` + business.purchasingAgent.nameFirst + ' ' + business.purchasingAgent.nameLast + `</h3>`
    + `<div class="agent--company">` + business.companyName + `</div><br>`
    + `<div class="agent--phone">` + business.phoneWork + `</div><hr>`
)

export const purchasingAgentsHTML = purchasingAgents(businessesAll).join("")

document.querySelector(".agent--search").addEventListener("keydown", (keyPressEvent) => {
    const agentSearchResultArticle = document.querySelector(".foundAgent")
    
    //find object from target.value, set both to upperCase to make case insensitive when calling includes method
    const foundAgent = businessesAll.find(business => business.purchasingAgent.nameLast.toUpperCase().includes(keyPressEvent.target.value.toUpperCase()))

    //wrap foundBusiness object in an array to it can be used as an argument to the purchasingAgents function, which expects an array   
    const wrappedFoundAgent = [foundAgent].flat()
    //add error handling, pass to purchasingAgents function when value length > 1
    if (keyPressEvent.target.value.length > 1) {
        agentSearchResultArticle.innerHTML = purchasingAgents(wrappedFoundAgent)
    }
    //clear innerHTML when foundAgent doesn't return an agent or value.length is <= 1
    else {
        agentSearchResultArticle.innerHTML = ""
    }
})
