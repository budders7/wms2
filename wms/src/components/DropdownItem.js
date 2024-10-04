import Dropdown from "react-bootstrap/Dropdown";

function DropdownItem({ label, value, click }) {
  return (
    <Dropdown.Item onClick={click} data-value={value}>
      {label}
    </Dropdown.Item>
  );
}

export default DropdownItem;
