import style from "./style.module.css";
import Link from "@mui/material/Link";
import logo from "./logoQ1.png"

function Header() {
  return (
    <div>
      <div className={style.wraperHeader}>
      <h1 className={style.linkLogo}>
        <Link href="#" underline="none" ><img src={logo} alt="img"/></Link>
      </h1>
        <div className={style.nav}>
            <Link href="#" underline="none" className={style.linkBtn}>{"Target audience"}</Link>
            <Link href="#" underline="none" className={style.linkBtn}>{"Summary"}</Link>
            <Link href="#" underline="none" className={style.linkBtn}>{"Speaker"}</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
