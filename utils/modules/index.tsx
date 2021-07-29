import { weightModuleBlock } from 'src/Weight/utils'
import { reportModuleBlock } from 'src/Report/utils'

export interface generalBlockInterface {
    type:string,
    route?:string,
    uac:number,
    name:string,
    tooltip:string,
    nested?:object[],
}

export interface nestedBlockInterface {
    name: string,
    Tooltip: string,
    route: string,
    uac: number,
}

export const moduleBlocks = [
    weightModuleBlock,
    reportModuleBlock,
]