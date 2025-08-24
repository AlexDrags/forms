import * as yup from 'yup';
export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(/^[A-ZА-Я]/, { message: 'first uppercased letter' })
      .min(3)
      .required('first uppercased letter'),
    age: yup.number().positive().integer().required(),
    email: yup
      .string()
      .email()
      .matches(/\S+@\S+\.\S+/, {
        message: 'Invalid format: example@mail.domen',
      })
      .required(),
    password: yup
      .string()
      .required('Password is required')
      .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least 1 number')
      .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /[^A-Za-z0-9]/,
        'Password must contain at least 1 special character'
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    gender: yup.string().required(),
    agreement: yup
      .boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('This field is required'),
    picture: yup.mixed<FileList>().required(),
    // picture: yup.string().required(),
    country: yup.string().required(),
    base: yup.string().required(),
  })
  .required();
export type FormData = yup.InferType<typeof schema>;
