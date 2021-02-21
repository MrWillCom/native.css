import "../../../dist/css/native.css";
import "../../../dist/js/main";

export const createDropdown = ({
    open = true,
    items,
}) => {
    const dropdown = document.createElement("div");
    dropdown.className = ["dropdown-menu", open ? "open" : ""].join(" ");

    for (const item of items) {
        const dropdownItem = document.createElement("li");
        if (item == "--divider--") {
            const dropdownDivider = document.createElement("hr");
            dropdownDivider.className = "dropdown-divider";
            dropdownItem.appendChild(dropdownDivider);
        } else {
            const dropdownItemButton = document.createElement("button");
            dropdownItemButton.className = "dropdown-item";
            dropdownItemButton.innerHTML = item;
            dropdownItem.appendChild(dropdownItemButton);
        }
        dropdown.appendChild(dropdownItem);
    }

    return dropdown;
};
