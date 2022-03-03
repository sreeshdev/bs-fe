import React, { useState } from "react";
import "./styles.scss";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Formik } from "formik";
const Login = () => {
  const [signUpContent, setSignUpContent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  return (
    <div className="mainContainer">
      {signUpContent ? (
        <div className="loginContainer">
          <div className="header">Signup</div>
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "*Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "*Invalid email address";
              }
              if (values.password !== values.confirmPassword) {
                errors.password = "*Password not matched";
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
              <form onSubmit={handleSubmit} className="inputContainer">
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    label="Email"
                  />
                  <label className="err">
                    {errors.email && touched.email && errors.email}
                  </label>
                </FormControl>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          name="showPassword"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <label className="err">
                    {errors.password && touched.password && errors.password}
                  </label>
                </FormControl>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="confirmPassword"
                    type={showPasswordConfirm ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          name="showPassword"
                          onClick={() => setShowPasswordConfirm(!showPassword)}
                          edge="end"
                        >
                          {showPasswordConfirm ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <label className="err">
                    {errors.password && touched.password && errors.password}
                  </label>
                </FormControl>
                <Button type="submit" variant="contained" className="logButton">
                  Signup
                </Button>
              </form>
            )}
          </Formik>
          <div className="lablling">
            Back to us?{" "}
            <a onClick={() => setSignUpContent(false)} className="link">
              Login
            </a>
          </div>
        </div>
      ) : (
        <div className="loginContainer">
          <div className="header">Login</div>

          <Formik
            initialValues={{ email: "", password: "" }}
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
                alert(JSON.stringify(values, null, 2));
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
              <form onSubmit={handleSubmit} className="inputContainer">
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    label="Email"
                  />
                  <label className="err">
                    {errors.email && touched.email && errors.email}
                  </label>
                </FormControl>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          name="showPassword"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <label className="err">
                    {errors.password && touched.password && errors.password}
                  </label>
                </FormControl>
                <Button type="submit" variant="contained" className="logButton">
                  Login
                </Button>
              </form>
            )}
          </Formik>
          <div className="lablling">
            New to us?{" "}
            <a onClick={() => setSignUpContent(true)} className="link">
              Sign up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
