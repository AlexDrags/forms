import './style.css';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUnControllFormState } from '../../store/formsStore';
import { schema } from '../../shema/shema';

function printFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (evt) {
      if (evt.target?.result) resolve(evt.target?.result);
    };
    reader.readAsDataURL(file);
  });
}

export default function UnControllForm({
  isShowing,
  hide,
}: {
  isShowing: boolean;
  hide: () => void;
}) {
  const formRef = useRef(null);
  const [err, setErr] = useState({});
  const updateUnFormDataState = useUnControllFormState(
    (state) => state.updateData
  );
  const clearUnFormDataState = useUnControllFormState(
    (state) => state.cleanData
  );

  const formContentEl = document.getElementById('modal');

  if (!formContentEl) {
    return null;
  }

  {
    return !isShowing
      ? null
      : createPortal(
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formRef.current) {
                const formObj = new FormData(formRef.current);
                const file = formObj.get('file') as File;
                const formDataObj = {
                  name: `${formObj.get('name')}`,
                  age: Number(`${formObj.get('age')}`),
                  email: `${`${formObj.get('email')}`}`,
                  password: `${formObj.get('password')}`,
                  confirmPassword: `${formObj.get('confirmPassword')}`,
                  gender: `${formObj.get('gender')}`,
                  agreement: Boolean(formObj.get('agreement')),
                  picture: formObj.get('file') as unknown as FileList,
                  country: `${formObj.get('country')}`,
                  base: `s`,
                };
                if (file) {
                  (async function foo(evt) {
                    const re = evt.currentTarget;
                    const fdata = await printFile(file);
                    const obj = { base: fdata };
                    try {
                      await schema.validate(formDataObj, { abortEarly: false });
                      re.reset();
                      hide();
                    } catch (errors) {
                      if (errors.name === 'ValidationError') {
                        const newErrors: Record<string, string> = {};
                        errors.inner.forEach(
                          (e: { path: string; message: string }) => {
                            newErrors[e.path] = e.message;
                          }
                        );

                        setErr(newErrors);
                      } else {
                        console.error('Unexpected error:', errors);
                      }
                    }
                    const t = Object.assign(formDataObj, obj);
                    updateUnFormDataState(t);
                  })(e);
                }
              }
            }}
            ref={formRef}
            id="uncontroll"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            {err.name && <span className="error-message">{err.name}</span>}
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" />
            {err.age && <span className="error-message">{err.age}</span>}
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            {err.email && <span className="error-message">{err.email}</span>}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            {err.password && (
              <span className="error-message">{err.password}</span>
            )}
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            {err.confirmPassword && (
              <span className="error-message">{err.confirmPassword}</span>
            )}
            <label htmlFor="male">Male:</label>
            <input type="radio" name="gender" id="male" value="male" />
            {err.gender && <span className="error-message">{err.gender}</span>}

            <label htmlFor="female">Female:</label>
            <input type="radio" name="gender" id="female" value="female" />
            {err.gender && <span className="error-message">{err.gender}</span>}

            <label htmlFor="agreement">Terms and Conditions agreement:</label>
            <input type="checkbox" name="agreement" id="agreement" />
            {err.agreement && (
              <span className="error-message">{err.agreement}</span>
            )}
            <label htmlFor="file">File:</label>
            <input type="file" name="file" id="file" />
            {err.picture && (
              <span className="error-message">{err.picture}</span>
            )}

            <label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" />
            {err.country && (
              <span className="error-message">{err.country}</span>
            )}

            <fieldset>
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => {
                  hide();
                  clearUnFormDataState();
                }}
              >
                Close modal
              </button>
            </fieldset>
          </form>,
          formContentEl
        );
  }
}
