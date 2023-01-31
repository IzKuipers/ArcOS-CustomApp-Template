interface SettingsPage {
  name: string;
  icon: string;
  content: typeof SvelteComponent;
  sep?: boolean;
  disabled?: boolean;
}
