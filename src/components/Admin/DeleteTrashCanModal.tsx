import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, Dialog, Portal, Checkbox } from "react-native-paper";
import TextInput from "../TextInput";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTrashCanModal = ({ visible, setVisible }: ModalProps) => {
  const hideDialog = () => setVisible(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>쓰레기통 삭제</Dialog.Title>
        <Dialog.Content>
          <View
            style={{
              marginBottom: 2,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-end",
              alignContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12 }}>506 인문관 2층-1</Text>
            <Checkbox.Android
              status={checked1 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
          </View>
          <View
            style={{
              marginBottom: 2,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-end",
              alignContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12 }}>506 인문관 3층-1</Text>
            <Checkbox.Android
              status={checked2 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
          </View>
          <View
            style={{
              marginBottom: 2,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-end",
              alignContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12 }}>506 인문관 4층-1</Text>
            <Checkbox.Android
              status={checked3 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>취소</Button>
          <Button
            onPress={hideDialog}
            mode="contained"
            style={{ paddingHorizontal: 6 }}
          >
            삭제
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DeleteTrashCanModal;
