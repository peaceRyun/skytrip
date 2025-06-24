import { create } from 'zustand';

const useLocationStore = create((set) => ({
  nx: 60,
  ny: 127,
  baseDate: '20240623',
  baseTime: '0500',

  coords: null,
  address: '',

  setCoords: (lat, lng) => set({ coords: { lat, lng } }),
  setAddress: (addr) => set({ address: addr }),
  setLocation: ({ nx, ny }) => set({ nx, ny }),
}));

export default useLocationStore;
