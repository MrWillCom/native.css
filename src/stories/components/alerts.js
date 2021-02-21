import "../../../dist/css/native.css";
import "../../../dist/js/main";

export const createAlert = ({
    close = false,
    title,
    desc,
}) => {
    const alert = document.createElement("div");
    alert.className = ["alert", close ? "close" : ""].join(" ");

    const closeButton = document.createElement("button")
    closeButton.className = ["btn", "alert-close"].join(" ");
    closeButton.addEventListener("click", () => { alert.classList.add("close") });

    const titleElement = document.createElement("h2");
    titleElement.className = "alert-title";
    titleElement.innerHTML = title;

    const descElement = document.createElement("p");
    descElement.className = "alert-desc";
    descElement.innerHTML = desc;

    alert.appendChild(closeButton);
    alert.appendChild(titleElement);
    alert.appendChild(descElement);

    return alert;
};
