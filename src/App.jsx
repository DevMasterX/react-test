import Header from "./components/Header/Header";
import Content from "./components/Content";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <h1>Состояние компонента</h1>
      <Counter />
    </>
  );
};

export default App;
