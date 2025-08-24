import './style.css';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../shema/shema';
import type { FormData } from '../../shema/shema';

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
    reset,
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
            onSubmit={handleSubmit((data) => {
              console.log(isValid, data);
              reset();
            })}
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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
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
            <label htmlFor="agreement">
              Accept terms and Conditions agreement:
            </label>
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
