import { useState } from 'react';

export default function useModal() {
  const [isShowingControll, setIsShowingControll] = useState(false);
  const [isShowingUnControll, setIsShowingUnControll] = useState(false);

  function toggleControllForm() {
    setIsShowingControll(!isShowingControll);
  }

  function toggleUnControllForm() {
    setIsShowingUnControll(!isShowingUnControll);
  }

  return {
    isShowingControll,
    toggleControllForm,
    isShowingUnControll,
    toggleUnControllForm,
  };
}
