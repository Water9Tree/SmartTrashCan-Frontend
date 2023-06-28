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
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});

export default Header;
