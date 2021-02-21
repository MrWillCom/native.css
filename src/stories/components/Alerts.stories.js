import { createAlert } from "./alerts";

export default {
  title: "Components/Alerts",
  argTypes: {
    close: { control: "boolean" },
    title: { control: "text" },
    desc: { control: "text" },
  },
};

const Template = ({ close, title, desc }) => {
  return createAlert({ close, title, desc });
};

export const Standard = Template.bind({});
Standard.args = {
  title: "Standard Alert",
  desc: "This is a demo alert by Native.css.",
};
