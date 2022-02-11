import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MagicMenu } from '../components/MagicMenu/MagicMenu'

export default {
  title: 'MagicMenu',
  component: MagicMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MagicMenu>

const Template: ComponentStory<typeof MagicMenu> = (args) => (
  <MagicMenu {...args} />
)

export const MagicMenuBase = Template.bind({})
