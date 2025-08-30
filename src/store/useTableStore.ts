import { create } from 'zustand';
import type { ITable } from '../types/tcard';

export const useTableStore = create<ITable>((set) => ({
  isShowMethane: false,
  isShowOiCo2: false,
  isShowTempChangeCo2: false,
  updateShowMethane: () =>
    set((state) => ({ isShowMethane: !state.isShowMethane })),
  updateShowOiCo2: () => set((state) => ({ isShowOiCo2: !state.isShowOiCo2 })),
  updateShowTempChangeCo2: () =>
    set((state) => ({
      isShowTempChangeCo2: !state.isShowTempChangeCo2,
    })),
}));
