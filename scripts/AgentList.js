import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

const purchasingAgents = businessesAll.map(business => `<h3 class="agent--name">` + business.purchasingAgent.nameFirst +' '+ business.purchasingAgent.nameLast + `</h3>`
    + `<div class="agent--company">` + business.companyName + `</div><br>`
    + `<div class="agent--phone">` + business.phoneWork + `</div><hr>`
)

export const purchasingAgentsHTML = purchasingAgents.join("")
