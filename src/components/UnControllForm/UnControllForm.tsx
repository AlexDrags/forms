import './style.css';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useUnControllFormState } from '../../store/formsStore';

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
                console.log(file);
                if (file) {
                  (async function foo() {
                    const fdata = await printFile(file);
                    const obj = { base: fdata };

                    const formDataObj = {
                      name: `${formObj.get('name')}`,
                      age: Number(formObj.get('age')),
                      email: `${formObj.get('email')}`,
                      password: `${formObj.get('password')}`,
                      confirmPassword: `${formObj.get('confirmPassword')}`,
                      gender: `${formObj.get('gender')}`,
                      agreement: Boolean(formObj.get('agreement')),
                      picture: formObj.get('file') as unknown as FileList,
                      country: `${formObj.get('country')}`,
                      base: `s`,
                    };
                    const t = Object.assign(formDataObj, obj);
                    updateUnFormDataState(t);
                  })();
                  e.currentTarget.reset();
                  hide();
                }
              }
            }}
            ref={formRef}
            id="uncontroll"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              pattern="/[^A-Za-z0-9]/"
              title="first uppercased letter"
              required
            />
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" required />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              pattern="/\S+@\S+\.\S+/"
              title="Invalid format: example@mail.domen"
              required
            />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
            <label htmlFor="rpassword">Repeat password:</label>
            <input type="password" name="rpassword" id="rpassword" required />
            <label htmlFor="male">Male:</label>
            <input type="radio" name="gender" id="male" value="male" required />
            <label htmlFor="female">Female:</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="agreement">Terms and Conditions agreement:</label>
            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="file">File:</label>
            <input type="file" name="file" id="file" required />
            <label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" required />
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
