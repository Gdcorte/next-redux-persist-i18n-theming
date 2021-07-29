import { useContext } from 'react'

import {
    SelectStyled,
} from './styles'

import { ThemeContext } from 'styled-components';
import { ThemeInterface } from 'styles/Themes'

const ReactSelect = ({ 
    initialValue,
    options, 
    handleChangeCallback
}) =>{

    const themeContext:ThemeInterface = useContext(ThemeContext);

    function updateSelectedWeighting(event){
        handleChangeCallback(event)
    }

    const style = {
        menu: (provided) =>({
            ...provided,
        }),
        menuList: (provided) =>({
            ...provided,
            backgroundColor: themeContext.default.background,
            "&:hover": {
              color: themeContext.secondary.text,
              backgroundColor: themeContext.default.background + themeContext.opacity,
            }
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? themeContext.secondary.text : themeContext.primary.text,
            padding: state.isSelected ? '5px 20px' : 5,
            backgroundColor: state.isSelected ? themeContext.secondary : themeContext.default.background,
            "&:hover": {
              color: themeContext.secondary.text,
              backgroundColor: themeContext.default.background + themeContext.opacity,
            }
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: themeContext.default.background,
          color: themeContext.primary.text,
          border: `2px solid ${themeContext.primary}`,
          boxShadow: "none",
          cursor:'pointer',
          "&:hover": {
            color: "#0f0",
          }
        }),
        singleValue: (provided) =>({
            ...provided,
            color: themeContext.primary.text,
        }),
      };

    return(
        <>
            {initialValue && 
                <SelectStyled
                    defaultValue={initialValue}
                    onChange={updateSelectedWeighting}
                    options={options}
                    styles={style}
                />
            }
        </>
    )
}

export default ReactSelect