import './style.css';
import { createPortal } from 'react-dom';
import { useTableStore } from '../../store/useTableStore';

export default function Modal({
  isopen,
  closeOpen,
}: {
  isopen: boolean;
  closeOpen: (prev: boolean) => void;
}) {
  const showMethane = useTableStore((state) => state.updateShowMethane);
  const showOiCo2 = useTableStore((state) => state.updateShowOiCo2);
  const showTempChangeCo2 = useTableStore(
    (state) => state.updateShowTempChangeCo2
  );
  const rootModal = document.getElementById('root-modal');
  if (!rootModal) return null;
  if (isopen) {
    return createPortal(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          closeOpen(!isopen);
        }}
      >
        <fieldset>
          <p>
            <label htmlFor="methane">Methane:</label>
            <input
              type="checkbox"
              name=""
              id="methane"
              onChange={showMethane}
            />
          </p>
          <p>
            <label htmlFor="oilco2">Oil CO2:</label>
            <input type="checkbox" name="" id="oilco2" onChange={showOiCo2} />
          </p>
          <p>
            <label htmlFor="tempco2">Temperature change from CO2:</label>
            <input
              type="checkbox"
              name=""
              id="tempco2"
              onChange={showTempChangeCo2}
            />
          </p>
        </fieldset>
        <menu>
          <button id="cancel" type="submit">
            Close modal
          </button>
        </menu>
      </form>,
      rootModal
    );
  }
}
