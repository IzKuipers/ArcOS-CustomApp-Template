type WindowLoader = (id: string, app: App) => boolean;

interface App {
  info: GeneralAppInfo;
  pos: XY;
  size: Size;
  minSize: Size;
  maxSize: Size;
  controls: ControlsState;
  menubar?: WindowMenuBar;
  state: AppStates;
  content: typeof SvelteComponentDev;
  id?: string;
  glass: boolean;
  events?: AppEvents;
  disabled?: boolean;
  opened?: boolean;
  parentId?: string;
  overlays?: { [key: string]: OverlayableApp };
  errorOverlays?: OverlayableError[];
  children?: { [key: string]: App };
}

interface OverlayableError {
  title: string;
  message: string;
  buttons: ErrorButton[];
  image?: string;
  id?: string;
}

interface OverlayableApp {
  info: OverlayableAppInfo;
  size: Size;
  content?: typeof SvelteComponentDev;
  parentId?: string;
  id?: string;
  show: boolean;
}

interface GeneralAppInfo {
  name: string;
  description: string;
  builtin: boolean;
  version: string;
  author?: string;
  hidden?: boolean;
  titleSuffix?: string;
  icon: string;
  custom?: boolean;
}

interface OverlayableAppInfo {
  name: string;
  author: string;
  version: string;
}

interface AppStates {
  headless: boolean;
  resizable: boolean;
  windowState: WindowState;
}

type Size = { w: number; h: number };
type XY = { x: number; y: number };
interface WindowState {
  min: boolean; // Minimized
  max: boolean; // Maximized
  fll: boolean; // Fullscreen
}

interface ControlsState {
  min: boolean; // Minimized
  max: boolean; // Maximized
  cls: boolean; // Close
}

interface WindowMenuBar {
  leftItems: WindowMenuItem[];
  rightItems: WindowMenuItem[];
  visibleOnHeadless: boolean;
  visibleOnFullscreen: boolean;
}

interface WindowMenuItem {
  type: WindowMenuBarItemType;
  caption?: string;
  click?: (e: MouseEvent) => void;
  menuItems?: WindowMenuItem[];
}

interface AppEvents {
  open?(app: App): void;
  close?(app: App): void;
  maximize?(app: App): void;
  minimize?(app: App): void;
  enterFullscreen?(app: App): void;
  leaveFullscreen?(app: App): void;
  keyboardShortcuts?: AppKeyCombinations;
}

/**
 * sep: Separator
 * btn: Button
 * mnu: Menu
 */
type WindowMenuBarItemType = "sep" | "btn" | "mnu";
