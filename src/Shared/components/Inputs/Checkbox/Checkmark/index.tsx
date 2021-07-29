import {
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox,
    Icon
} from './styles'

const Checkmark = ({ checked, ...props }) => (
  <>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} type={'checkbox'} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </>
)

export default Checkmark