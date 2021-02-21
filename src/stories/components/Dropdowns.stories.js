import { createDropdown } from "./dropdowns";

export default {
    title: "Components/Dropdowns",
    argTypes: {
        open: { control: "boolean" },
        items: { control: "array" },
    },
};

const Template = ({ ...args }) => {
    return createDropdown({ ...args });
};

export const Standard = Template.bind({});
Standard.args = {
    open: true,
    items: [
        "Item 1",
        "Item 2",
        "--divider--",
        "Item 3",
    ]
};
