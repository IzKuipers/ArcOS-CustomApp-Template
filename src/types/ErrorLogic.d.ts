export interface ErrorMessage {
  title: string;
  message: string;
  opened: boolean;
  buttons: ErrorButton[];
  id: number;
  image?: string;
  parentId?: string;
}

export interface ErrorButton {
  caption: string;
  action: () => void;
}
