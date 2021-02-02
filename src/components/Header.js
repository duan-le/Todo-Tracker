import Button from "./Button";

const Header = ({ title, onAdd, showAddTodo }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTodo ? "red" : "green"}
        text={showAddTodo ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "To-Do Tracker",
};

export default Header;
