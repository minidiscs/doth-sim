import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

export const businessList = () => {
    let businessListHTML = "<h1>Active Businesses</h1>"

    businesses.forEach((business) => {
        businessListHTML += `
            <section class="business">
                <h2 class="business--name">
                ${business.companyName}</h2>
                <div class="business--address">
                ${business.addressFullStreet}<br>
                ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                <hr>`
    })
    return businessListHTML    
}
