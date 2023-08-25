import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";
import Input from "../Input/Input";

function Preview() {
  const arrOfInputs = ["First name*", "Last name*", "Company name*", "Email address*"];

  return (
    <>
      <div className={style.wrapperPreview}>
        <p className={style.p1}>Free webinar</p>
        <h1>How to launch a neobank in 6 months?</h1>
        <p className={style.p2}>
          Register for the webinar now! Please fill out all fields
        </p>
        <div className={style.wrapperInput}>
          <Input arr = {arrOfInputs } className={style.wrapperInputElement} />
          {/* <TextField arr={arrOfInputs} className={style.wrapperInputElement} id="outlined-basic" label="Last name*" variant="outlined"/>
          <TextField arr={arrOfInputs} className={style.wrapperInputElement} id="outlined-basic" label="Last name*" variant="outlined"/>
          <TextField arr={arrOfInputs} className={style.wrapperInputElement} id="outlined-basic" label="Last name*" variant="outlined"/>
          <TextField arr={arrOfInputs} className={style.wrapperInputElement} id="outlined-basic" label="Last name*" variant="outlined"/> */}
        </div>
        <div className={style.btn}>
          <Button className={style.btnSubmit} variant="outlined">Submit</Button>
        </div>
      </div>
    </>
  );
}

export default Preview;
