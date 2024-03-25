import type { ComponentProps } from 'vue-component-type-helpers';
import type { Meta, StoryObj } from "@storybook/vue3";

import BaseSelect from '../components/BaseSelect.vue';

type PagePropsAndCustomArgs = ComponentProps<typeof BaseSelect>;

const meta: Meta<PagePropsAndCustomArgs> = {
  component: BaseSelect,
  tags: ['autodocs'],
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      let model = args.modelValue

      return { args, model };
    },
    template: `
      <BaseSelect v-bind="args" :modelValue="model" />
    `,
  }),
};
export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

export const Begginer: Story = {
  args: {
    label: 'Beginner',
    icon: 'beginner'
  }
}

export const Intermediate: Story = {
  args: {
    label: 'Intermediate',
    icon: 'intermediate'
  }
}

export const Advanced: Story = {
  args: {
    label: 'Advanced',
    icon: 'advanced'
  }
}

export const Expert: Story = {
  args: {
    label: 'Expert',
    icon: 'expert'
  }
}

export const Selected: Story = {
  ...meta,
  args: {
    label: 'Expert',
    icon: 'expert',
    modelValue: 'Expert'
  }
}
