export interface ITo {
  content: string;
  to: string;
  icon: string;
}

export type TProps = {
  links: Array<ITo>;
};
