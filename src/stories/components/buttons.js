import "../../../dist/css/native.css";
import "../../../dist/js/main";

export const createButton = ({
  primary = false,
  disabled = false,
  label = `${primary ? "Primary ": ""}${disabled ? "Disabled ": ""}Button`,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary ? "btn-primary" : "";
  disabled = disabled ? "disabled" : "";
  btn.className = ["btn", mode, disabled].join(" ");

  return btn;
};
