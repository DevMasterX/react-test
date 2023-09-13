// import Header from "./components/Header/Header";
// import Content from "./components/Content";
// import Counter from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Dropdown from "./components/Dropdown/Dropdown";

const colorPickerOptions = [
  { label: "red", color: "#f44336" },
  { label: "green", color: "#00fd0d" },
  { label: "blue", color: "#4202f0" },
  { label: "grey", color: "#656565" },
  { label: "pink", color: "#f90eca" },
  { label: "indigo", color: "#3f51b5" },
];

const App = () => {
  return (
    <>
      {/* <Header />
      <Content />
      <h1>Состояние компонента</h1>
      <Counter initialValue={10} /> */}
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default App;
