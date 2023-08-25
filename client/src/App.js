import style from "./style.module.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <h1>NEOBANK</h1>
      </div>
    </>
  );
}

export default App;
