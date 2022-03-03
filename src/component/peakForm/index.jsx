import React from "react";
import "./styles.scss";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Formik } from "formik";
const PeakForm = () => {
  return (
    <div className="formContainer">
      <header>Create Alert</header>
      <Formik
        initialValues={{
          name: "",
          criteria: "GT",
          value: 0,
          days: "all",
          email: "",
          phone: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "*Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "*Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                id="name"
                value={values.name}
                onChange={handleChange}
                name="name"
                label="Name"
              />
              <label className="err">
                {errors.name && touched.name && errors.name}
              </label>
            </FormControl>
            <FormControl>
              <FormLabel id="criteria-radio">Criteria</FormLabel>
              <RadioGroup
                row
                aria-labelledby="criteria-radio"
                name="criteria"
                value={values.criteria}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="GT"
                  control={<Radio />}
                  label="Greater than"
                />
                <FormControlLabel
                  value="LT"
                  control={<Radio />}
                  label="Less than"
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="value">Value</InputLabel>
              <OutlinedInput
                id="value"
                name="value"
                value={values.value}
                onChange={handleChange}
                label="Value"
                type="number"
              />
              <label className="err">
                {errors.value && touched.value && errors.value}
              </label>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Days</InputLabel>
              <Select value={values.days} label="Days" onChange={handleChange}>
                <MenuItem value={"all"}>Everyday</MenuItem>
                <MenuItem value={"mon"}>Monday</MenuItem>
                <MenuItem value={"tue"}>Tuesday</MenuItem>
                <MenuItem value={"wed"}>Wednesday</MenuItem>
                <MenuItem value={"thur"}>Thursday</MenuItem>
                <MenuItem value={"fri"}>Friday</MenuItem>
                <MenuItem value={"sat"}>Saturday</MenuItem>
                <MenuItem value={"sun"}>Sunday</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                label="Email"
              />
              <label className="err">
                {errors.email && touched.email && errors.email}
              </label>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="value">Phone</InputLabel>
              <OutlinedInput
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                label="Phone"
              />
              <label className="err">
                {errors.phone && touched.phone && errors.phone}
              </label>
            </FormControl>
            <Button type="submit" variant="contained" className="subButton">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PeakForm;
