import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxIndicator, CheckboxContainer } from './styles'

export interface CheckboxtProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxtProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
