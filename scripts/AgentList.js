import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

const purchasingAgents = (businesses) => businesses.map(business => `<h3 class="agent--name">` + business.purchasingAgent.nameFirst + ' ' + business.purchasingAgent.nameLast + `</h3>`
    + `<div class="agent--company">` + business.companyName + `</div><br>`
    + `<div class="agent--phone">` + business.phoneWork + `</div><hr>`
)

export const purchasingAgentsHTML = purchasingAgents(businessesAll).join("")

document.querySelector(".agent--search").addEventListener("input", (keyPressEvent) => {
    const agentSearchResultArticle = document.querySelector(".foundAgent")

    const foundAgent = businessesAll.find(business => business.purchasingAgent.nameLast.toUpperCase().includes(keyPressEvent.target.value.toUpperCase()))

    //wrap foundBusiness object in an array to it can be used as an argument to the purchasingAgents function, which expects an array   
    const wrappedFoundAgent = [foundAgent].flat()
    //add error handling, pass to eachBusiness function
    if (foundAgent != undefined) {
        agentSearchResultArticle.innerHTML = purchasingAgents(wrappedFoundAgent)
    }
    else {
        agentSearchResultArticle.innerHTML = ""
    }
})
