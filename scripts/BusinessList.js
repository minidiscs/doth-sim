import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

export const eachBusiness = (businesses) => {
    let businessListHTML = ""
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
export const businessList = () => eachBusiness(businessesAll)
