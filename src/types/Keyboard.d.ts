interface AppKeyCombination {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key: string;
  action(app: App): void;
  global?: boolean;
}

type AppKeyCombinations = AppKeyCombination[];
