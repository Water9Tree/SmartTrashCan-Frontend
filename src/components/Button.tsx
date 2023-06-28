import React from "react";
import { Button as PaperButton } from "react-native-paper";

interface Props extends React.ComponentProps<typeof PaperButton> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => (
  <PaperButton labelStyle={{ fontSize: 14, fontWeight: "bold" }} {...props}>
    {children}
  </PaperButton>
);

export default Button;
