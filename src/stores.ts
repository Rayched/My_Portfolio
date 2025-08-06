import { create } from "zustand";

interface I_ThemeStore {
    isDark: boolean;
    setDark: () => void;
};

export const ThemeStore = create<I_ThemeStore>((set) => ({
    isDark: false,
    setDark: () => set((s) => ({isDark: !s.isDark}))
}));