import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@justin-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse dolores velit ipsam sed incidunt. Dolorem fugiat libero commodi recusandae ipsum explicabo eaque quaerat quis asperiores possimus beatae, sed consequatur.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
