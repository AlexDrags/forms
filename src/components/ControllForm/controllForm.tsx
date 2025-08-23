import './style.css';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().min(10).required('Имя обязательно'),
    age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    rpassword: yup.string().min(8).max(32).required(),
    gender: yup.string().required(),
    agreement: yup.boolean().required(),
    country: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function ControllForm({
  isShowing,
  hide,
}: {
  isShowing: boolean;
  hide: () => void;
}) {
  const {
    formState,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { isValid } = formState;

  const formContentEl = document.getElementById('modal');

  if (!formContentEl) {
    return null;
  }

  {
    return !isShowing
      ? null
      : createPortal(
          <form
            onSubmit={handleSubmit((data) => console.log(isValid, data))}
            id="controll"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" {...register('age')} />
            {errors.age && <span>{errors.age.message}</span>}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
            <label htmlFor="rpassword">Repeat password:</label>
            <input type="password" id="rpassword" {...register('rpassword')} />
            {errors.rpassword && <span>{errors.rpassword.message}</span>}
            <label htmlFor="male">Male:</label>
            <input
              type="radio"
              id="male"
              value="male"
              {...register('gender')}
            />
            {errors.gender && <span>{errors.gender.message}</span>}
            <label htmlFor="female">Female:</label>
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender')}
            />
            {errors.gender && <span>{errors.gender.message}</span>}
            <label htmlFor="agreement">Terms and Conditions agreement:</label>
            <input type="checkbox" id="agreement" {...register('agreement')} />
            {errors.agreement && <span>{errors.agreement.message}</span>}
            <label htmlFor="file">File:</label>
            <input type="file" name="file" id="file" />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" {...register('country')} />
            {errors.country && <span>{errors.country.message}</span>}
            <fieldset>
              <input type="submit" disabled={!isValid} />
              <button type="button" onClick={hide}>
                Close modal
              </button>
            </fieldset>
          </form>,
          formContentEl
        );
  }
}
