// CURRENTLY OBSOLETE! NEEDS REVAMPING> BUT I AM NOT LIKING THIS ONE!
import {FunctionComponent} from 'react'
import {DateWrapper, DatePickerModifier} from './styles';

import "react-datepicker/dist/react-datepicker.css";

interface DateInterface {
    selected: Date,
    addGlobalStylesheet?: boolean,
}

const defaultProps: DateInterface = {
    addGlobalStylesheet: true,
    selected: new Date(),
}

const DateInput: FunctionComponent<DateInterface> = ({
    addGlobalStylesheet,
    ...props
}) =>{

    return(
        <>  
            {addGlobalStylesheet && <DatePickerModifier />}
            <DateWrapper 
                {...props}
                showMonthDropdown
                showYearDropdown
            />
        </>
    )
}

DateInput.defaultProps = defaultProps

export default DateInput