import style from "./style.module.css";
import Header from "./Components/Header/Header";
import Preview from "./Components/Preview/Preview";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.wraperInner}>
        <Header />
        <Preview />
        </div>
      </div>
    </>
  );
}

export default App;
