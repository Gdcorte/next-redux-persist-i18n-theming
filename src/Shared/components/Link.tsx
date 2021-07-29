import styled from 'styled-components'
import Link from 'next/link'

export const LinkContainer = styled.div`
   color: ${ ({theme}) => theme.text};
`

const LinkStyled = ({
   href,
   textField,
   ...props
}) => {

   return (
      <LinkContainer
         {...props}
      >
         <Link
            href={href}
         >
            {textField}
         </Link>
      </LinkContainer>
   )
}

export default LinkStyled