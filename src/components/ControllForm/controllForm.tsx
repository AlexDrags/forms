import './style.css';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  exampleRequired: string;
  number: number;
  email: string;
  password: string;
  rpassword: string;
  gender: string;
  agreement: boolean;
  country: string;
};

export default function ControllForm({
  isShowing,
  hide,
}: {
  isShowing: boolean;
  hide: () => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch('name'), watch('number')); // watch input value by passing the name of it

  const formContentEl = document.getElementById('modal');

  if (!formContentEl) {
    console.log(state);
    return null;
  }

  {
    return !isShowing
      ? null
      : createPortal(
          <form onSubmit={handleSubmit(onSubmit)} id="controll">
            <label htmlFor="userName">Name:</label>
            <input type="text" id="userName" {...register('name')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" {...register('number')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="rpassword">Repeat password:</label>
            <input type="password" id="rpassword" {...register('rpassword')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="male">Male:</label>
            <input
              type="radio"
              id="male"
              value="male"
              {...register('gender')}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="female">Female:</label>
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender')}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="agreement">Terms and Conditions agreement:</label>
            <input type="checkbox" id="agreement" {...register('agreement')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="file">File:</label>
            <input type="file" name="file" id="file" />
            {errors.exampleRequired && <span>This field is required</span>}
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" {...register('country')} />
            {errors.exampleRequired && <span>This field is required</span>}
            <fieldset>
              <input type="submit" />
              <button type="button" onClick={hide}>
                Close modal
              </button>
            </fieldset>
          </form>,
          formContentEl
        );
  }
}
