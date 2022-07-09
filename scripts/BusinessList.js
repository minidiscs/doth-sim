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

document.querySelector(".company--search").addEventListener("input", (keyPressEvent) => {
    const companySearchResultArticle = document.querySelector(".foundBusinesses")

    const foundBusiness = businessesAll.find(business => business.companyName.toUpperCase().includes(keyPressEvent.target.value.toUpperCase()))

    //wrap foundBusiness object in an array to it can be used as an argument to the eachBusiness function, which expects an array   
    const wrappedFoundBusiness = [foundBusiness].flat()
    //add error handling, pass to eachBusiness function
    if (foundBusiness != undefined) {
        companySearchResultArticle.innerHTML = eachBusiness(wrappedFoundBusiness)
    }
    else {
        companySearchResultArticle.innerHTML = ""
    }
})
