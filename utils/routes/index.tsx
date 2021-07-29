export { AuthRouteMapping } from '../../src/Auth/utils/routes'

import { WeightRouteMapping } from '../../src/Weight/utils/routes'
export { WeightRouteMapping } from '../../src/Weight/utils/routes'

import { ReportRouteMapping } from '../../src/Report/utils/routes'
export { ReportRouteMapping } from '../../src/Report/utils/routes'

export { UserRouteMapping } from '../../src/User/utils/routes'

export function getUserDefaultRoute(userUac){

    if(userUac <= process.env.roleCommon){
        return WeightRouteMapping.main
    }
    
    return ReportRouteMapping.main
} 
