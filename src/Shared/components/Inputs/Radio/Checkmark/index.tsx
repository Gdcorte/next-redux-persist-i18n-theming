import {
    RadioContainer,
    HiddenRadio,
    StyledRadio,
    Icon
} from './styles'

const RadioMark = ({ checked, size=20, ...props }) => (
  <>
    <RadioContainer>
      <HiddenRadio checked={checked} {...props} type={'radio'} />
      <StyledRadio size={size} checked={checked}>
        <Icon viewBox={`0 0 ${size} ${size}`}>
          <circle 
            cx={`${size/2}`}
            cy={`${size/2}`}
            r={`${size/15}`}
          />
        </Icon>
      </StyledRadio>
    </RadioContainer>
  </>
)

export default RadioMark