import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";

interface Props extends React.ComponentProps<typeof Input> {
  errorText?: string;
}

const TextInput = ({ errorText, ...props }: Props) => (
  <View style={styles.container}>
    <Input
      theme={{ roundness: 10 }}
      style={styles.input}
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#f1f5f9",
    fontSize: 12,
  },
  error: {
    fontSize: 10,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default TextInput;
