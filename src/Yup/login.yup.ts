import * as Yup from "yup";
import { passwordValidation, studentIdValidation } from "./utils.yup";

export const loginSchema = Yup.object({
  studentId: studentIdValidation,
  password: passwordValidation,
});
