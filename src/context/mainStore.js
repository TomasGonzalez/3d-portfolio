import create from 'zustand';

const useStore = create((set) => ({
  cameraRef: null,
  setCameraRef: (camref) => set(() => ({ cameraRef: camref })),
  setFloatingCamera: (value) => set(() => ({ floatingCamera: value })),
  floatingCamera: false,
  setIsNavVisible: (value) => set(() => ({ isNavVisible: value })),
  isNavVisible: true,
  scrollElement: null,
  setScrollElement: (value) => set(() => ({ scrollElement: value })),
  track: null,
}));

export default useStore;
