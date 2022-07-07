import { eachBusiness } from "./BusinessList.js";
import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

const stateFilter = (state) => businessesAll.filter(company => company.addressStateCode === state)

const businessesNY = stateFilter("NY")    
export const businessListNY = () => eachBusiness(businessesNY)
