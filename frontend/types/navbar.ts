export interface ISocial {
  content: string;
  to: string;
  icon: string;
}

export type TProps = {
  links: Array<ISocial>;
};
