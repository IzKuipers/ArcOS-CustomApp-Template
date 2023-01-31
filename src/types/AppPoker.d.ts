interface AppPokerProperty {
  caption: string;
  action: (app: App) => void;
  getter: (app: App) => boolean;
}
