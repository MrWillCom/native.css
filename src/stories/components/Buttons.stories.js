import { createButton } from "./buttons";

export default {
  title: "Components/Buttons",
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Standard = Template.bind({});
Standard.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
