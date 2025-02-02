import { create } from "zustand";

interface FolderPathState {
  folderPath: string[];
  pushToFolderPath: (path: string) => void;
  popFromFolderPath: () => void;
}

const useFolderPathStore = create<FolderPathState>((set) => ({
  folderPath: [],
  pushToFolderPath: (path) =>
    set((state) => ({ folderPath: [...state.folderPath, path] })),
  popFromFolderPath: () =>
    set((state) => ({ folderPath: state.folderPath.slice(0, -1) })),
}));

export default useFolderPathStore;
