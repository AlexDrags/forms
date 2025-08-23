import { create } from 'zustand';

type Store = {
  data: FormData;
  updateData: (formData: FormData) => void;
};

export const reactFormState = create<Store>()((set) => ({
  data: new FormData(),
  updateData: (formData: FormData) => set({ data: formData }),
  cleanData: set({ data: new FormData() }),
}));
