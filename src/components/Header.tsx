import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});

export default Header;
