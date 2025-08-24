import { create } from 'zustand';

interface IStore {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  agreement: boolean;
  picture: FileList;
  country: string;
  base: string;
}

type Store = {
  data: IStore | null;
  updateData: (formData: IStore) => void;
  cleanData: () => void;
};

export const useReactFormState = create<Store>()((set) => ({
  data: null,
  updateData: (formData: IStore) => set({ data: formData }),
  cleanData: () => set({ data: null }),
}));
