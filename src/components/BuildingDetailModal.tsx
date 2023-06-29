import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, Dialog, Portal, Checkbox } from "react-native-paper";
import TrashCanTable from "./TrashCanTable";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuildingDetailModal = ({ visible, setVisible }: ModalProps) => {
  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>상세 정보</Dialog.Title>
        <Dialog.Content>
          <TrashCanTable />
        </Dialog.Content>
        <Dialog.Actions>
          {/* <Button onPress={hideDialog}>취소</Button> */}
          <Button
            onPress={hideDialog}
            mode="contained"
            style={{ paddingHorizontal: 6 }}
          >
            확인
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default BuildingDetailModal;
