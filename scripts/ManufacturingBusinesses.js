import { eachBusiness } from "./BusinessList.js";
import { getBusinesses } from "./database.js";

const businessesAll = getBusinesses()

const industryFilter = (industry) => businessesAll.filter(company => company.companyIndustry === industry)

const manufacturingBusinesses = industryFilter("Manufacturing")
export const manufacturingListBusinesses = () => eachBusiness(manufacturingBusinesses)
