type ExtendedWindow = {
  __arcos: ArcExposed;
} & Window &
  typeof globalThis;

interface ArcExposed {
  notifier: {
    makeNotification(data: NotificationData);
    errorMessage(
      title: string,
      message: string,
      image?: string,
      parentId?: string,
      ...buttons: ErrorButton[]
    );
    notifications: Writable<NotificationStore>;
    errorStore: Writable<ErrorMessage[]>;
    deleteNotification(id: string);
    closeNotification();
    closeError(id: number);
    createOverlayableError(error: OverlayableError, targetId: string);
    destroyOverlayableError(errorId: string, ownerId: string);
  };
  api: {
    apiHost: Writable<string>;
  };
  userLogic: {
    username: Writable<string>;
    userData: Writable<UserData>;
  };
  loadWindow: (id: string, app: App) => void;
  loadExternalApp: (info: ExternalAppLoaderContent) => void;
  windowLogic: {
    windowStore: Writable<App[]>;
    openWindow(id: string, openChild?: boolean);
    openChildWindow(parent: App, childId: string);
    closeChildWindow(parent: App, childId: string);
    closeWindow(id: string);
    maximizeWindow(app: App);
    minimizeWindow(app: App);
    fullscreenWindow(app: App);
    headlessToggle(app: App);
  };
  overlay: {
    showOverlay(id: string, parentId: string);
    hideOverlay(id: string, parentId: string);
  };
}

interface ExternalAppLoaderContent {
  meta: ExternalAppMeta;
  js: string;
  css: string;
  id: string;
}

interface ExternalAppMeta {
  name: string;
  author: string;
  version: string;
}

type WindowLoader = (id: string, app: App) => void;
