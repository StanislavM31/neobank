import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";

function Preview() {
  return (
    <>
      <div className={style.wrapperPreview}>
        <p className={style.p1}>Free webinar</p>
        <h1>How to launch a neobank in 6 months?</h1>
        <p className={style.p2}>
          Register for the webinar now! Please fill out all fields
        </p>
        <div className={style.wrapperInput}>
          <TextField id="outlined-basic" label="First name*" variant="outlined" />
          <TextField id="outlined-basic" label="Last name*" variant="outlined" />
          <TextField id="outlined-basic" label="Company name*" variant="outlined" />
          <TextField id="outlined-basic" label="Email address*" variant="outlined" />
        </div>
        <div className={style.btn}>
        <Button className={style.btnSubmit} variant="outlined">Submit</Button>
        </div>
      </div>
    </>
  );
}

export default Preview;
