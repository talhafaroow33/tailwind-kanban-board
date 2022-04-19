export interface BoardProps {
  children: React.ReactNode;
}
export interface AvatarProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export interface dialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
