import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import classes from "./AddProject.module.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00D37F",
  },
  "&:hover .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00D37F",
    },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#00D37F",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#333333",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00D37F",
    },
  },
  "& label.Mui-root": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
});

const PTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00D37F",
  },
  "&:hover .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00D37F",
    },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#00D37F",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#333333",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00D37F",
    },
  },
  "& label.Mui-root": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
});

const AddProject = () => {
  const history = useHistory();
  const [stacks, setstacks] = useState("");
  const initialValues = {
    name: "",
    description: "",
    stack: [],
    github: "",
    image: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleStack = (e) => {
    setstacks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    formValues.stack = stacks.split(" ");
    console.log(formValues);
    if (
      formValues.name.length === 0 ||
      formValues.description.length === 0 ||
      formValues.stack.length === 0
    ) {
      console.log(formValues.name.length);
      console.log(formValues.description.length);
      console.log(formValues.stack.length);
    } else {
      const requestOptions = {
        method: "POST",

        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      };
      console.log("test!!");
      console.log(`http://localhost:4000/api/addproject`);
      fetch(`http://localhost:3000/api/addproject`, requestOptions)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          swal({
            title: "Project added successfully!",
            text: "you will be redirected to Home page in 3 seconds",
            icon: "success",
            timer: 3000,
          }).then(() => {
            setTimeout(() => {
              history.push("/");
            }, 750);
          });
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, [isSubmit]);

  return (
    <div className={classes.addproj}>
      <h2>Add Project</h2>
      <div className={classes.form_container}>
        <div>
          <CssTextField
            label="Name"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            multiline={true}
            className={classes.first_tf}
            onChange={handleChange}
            name="name"
            value={formValues.name}
          />
        </div>
        <div>
          <CssTextField
            label="Description"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            multiline={true}
            className={classes.first_tf}
            onChange={handleChange}
            name="description"
            value={formValues.description}
          />
        </div>
        <div>
          <CssTextField
            label="Stack"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            multiline={true}
            className={classes.first_tf}
            onChange={handleStack}
            name="stacks"
            value={stacks}
          />
        </div>
        <div>
          <CssTextField
            label="Image"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            multiline={true}
            className={classes.first_tf}
            onChange={handleChange}
            name="image"
            value={formValues.image}
          />
        </div>
        <div>
          <CssTextField
            label="Github"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            multiline={true}
            className={classes.first_tf}
            onChange={handleChange}
            name="github"
            value={formValues.github}
          />
        </div>

        {/* <div>
          <PTextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            className={classes.first_tf}
            name="password"
            onChange={handleChange}
            value={formValues.password}
          />
          <p className={classes.errors}>{formErrors.password}</p>
        </div> */}
      </div>
      <div className={classes.bottom_buttons}>
        <div>
          <button onClick={handleSubmit}>Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
