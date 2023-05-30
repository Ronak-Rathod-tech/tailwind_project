import * as Yup from "yup";

export const registerSchema = Yup.object({
  firstname: Yup.string().min(2).max(20).required("please enter first name"),
  middlename: Yup.string().min(2).max(20).required("please enter middle name"),
  lastname: Yup.string().min(2).max(20).required("please enter last name"),
  mobile: Yup.string()
    .min(8)
    .matches(/^[6-9]\d{9}$/, "enter valid number")
    .required("please enter mobile number"),
  email: Yup.string().email().required("please enter email"),
  password: Yup.string().min(6).max(10).required("please enter password"),
  confirmpassword: Yup.string()
    .min(6)
    .max(10)
    .required("please enter your confirm password")
    .oneOf([Yup.ref("password")], "password must match"),

  gender: Yup.string().required("please select gender"),
});
