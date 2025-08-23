import { createPortal } from 'react-dom';
import './style.css';
export default function ReactForm({
  isShowing,
  hide,
}: {
  isShowing: boolean;
  hide: () => void;
}) {
  const formContentEl = document.getElementById('modal');
  if (!formContentEl) return null;
  async function sendForm(formdata: FormData) {
    'use server';
    console.log('send form:', formdata);
  }
  {
    return !isShowing
      ? null
      : createPortal(
          <form action={sendForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="rpassword">Repeat password:</label>
            <input type="password" name="rpassword" id="rpassword" />
            <label htmlFor="male">Male:</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="female">Female:</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="agreement">Terms and Conditions agreement:</label>
            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="file">File:</label>
            <input type="file" name="file" id="file" />
            <label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" />
            <fieldset>
              <button type="submit">Submit</button>
              <button type="button" onClick={hide}>
                Close modal
              </button>
            </fieldset>
          </form>,
          formContentEl
        );
  }
}
