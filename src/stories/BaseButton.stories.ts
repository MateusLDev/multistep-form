import type { ComponentProps } from 'vue-component-type-helpers';
import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../components/Button.vue";

type PagePropsAndCustomArgs = ComponentProps<typeof Button> & { slot?: string };

const meta: Meta<PagePropsAndCustomArgs> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: ['primary', 'secondary']
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        {{ args.slot }}
      </Button>
    `,
  }),
};
export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

export const Primary: Story = {
  args: {
    variant: "primary",
    slot: "Primary"
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    slot: "Secondary"
  },
};
