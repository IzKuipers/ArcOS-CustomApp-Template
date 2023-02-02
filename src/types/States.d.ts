interface State {
  name: string;
  content: SvelteComponent | any;
  attribs: { [key: string]: boolean | string | number };
  key: string;
  onload?: () => void;
  image?: string;
}
