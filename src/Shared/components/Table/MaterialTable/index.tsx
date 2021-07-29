import { MaterialTableStyled } from './styles'
import { TableIcons } from '../Icons'
import { ThemeContext } from 'styled-components';
import { useContext } from 'react'

import {ThemeInterface} from 'styles/Themes'


const ReactMaterialTable = ({
    columns, 
    data, 
    options,
    ...props
}) =>{
    const themeContext:ThemeInterface = useContext(ThemeContext)


    return (
        <>
            <MaterialTableStyled 
                icons={TableIcons}

                columns={columns}
                data={data}
                options={{
                    rowStyle: {
                        color: themeContext.primary.text,
                        backgroundColor: themeContext.default.background,
                    },
                    headerStyle: {
                        color: themeContext.primary.text,
                        backgroundColor: themeContext.default.background,
                    },
                    searchFieldStyle:{
                        color: themeContext.primary.text,
                        backgroundColor: themeContext.primary.background,
                    },
                    ...options
                }}
                {...props}
            />
        </>
    )
}

export default ReactMaterialTable