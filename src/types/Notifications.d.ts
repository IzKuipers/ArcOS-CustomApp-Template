interface NotificationData {
  title: string;
  message: string;
  icon?: string;
  image?: string;
  timeout?: number;
  buttons: NotificationButton[];
}

interface NotificationButton {
  capt: string;
  action: () => void;
}

type NotificationStore = { [key: string]: NotificationData };
