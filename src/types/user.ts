import type { EmojiStyle } from "emoji-picker-react";
import type { AppTheme } from "../styles/theme";


export type UUID = ReturnType<typeof crypto.randomUUID>;


export interface User {
  name: string | null;
  createdAt: Date;
  profilePicture: string | URL | null;
  emojisStyle: EmojiStyle;
  tasks: Task[];
  categories: Category[];
  colorList: string[];
  settings: AppSettings[];
  theme: AppTheme;
}


export interface Task {
  id: UUID;
  done: boolean;
  pinned: boolean;
  name: string;
  description?: string;
  emoji?: string;
  color: string;
  date: Date;
  deadline?: Date;
  category?: Category[];
  lastSave?: Date;
  sharedBy?: string;
}


export interface Category {
  id: UUID;
  name: string;
  emoji?: string;
  color: string;
}


export interface AppSettings {
  enableCategories: boolean;
  doneToBottom: boolean;
  enableGlow: boolean;
  simpleEmojiPicker: boolean;
  enableReadAloud: boolean;
  appBadge: boolean;
  voice: string;
  voiceVolume: number;
}


export interface UserProps {
  user: User; // User data
  setUser: React.Dispatch<React.SetStateAction<User>>; // Function to update user data
}
