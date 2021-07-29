export {
    verifyUser,
} from 'src/Auth/utils/helpers'

export {
    weightMethodsList,
} from 'src/Weight/utils/helpers'

export function convertNaiveUTCStrToDate(dateStr:string|Date){
    if (typeof dateStr != 'string'){
        return dateStr
    }
    
    let utcFormattedStr = dateStr.replace(' ', 'T') + 'Z'
    let newDate = new Date(utcFormattedStr)
    
    return newDate
}
