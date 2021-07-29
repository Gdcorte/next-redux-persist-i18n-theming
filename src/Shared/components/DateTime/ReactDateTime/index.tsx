import { DateTimeStyled } from './styles'
import moment from 'moment'

import "react-datetime/css/react-datetime.css";

const ReactDateTime = ({ initialValue, onChange, ...props }) => {

    function momentDateConvert(event){
        onChange(
            event.toDate()
        )
    }

    return(
        <>
            <DateTimeStyled
                dateFormat={'YYYY/MM/DD'}
                initialValue={moment(initialValue)}
                onChange={momentDateConvert}
                {...props}
            />
        </>
    )
}

export default ReactDateTime