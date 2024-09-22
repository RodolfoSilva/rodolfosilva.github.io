import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Timeline(props: Props) {
  const { children } = props;
  return <ul>{children}</ul>;
}
