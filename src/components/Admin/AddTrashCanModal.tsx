import React, { useState } from "react";
import { Button, Dialog, Portal } from "react-native-paper";
import TextInput from "../TextInput";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTrashCanModal = ({ visible, setVisible }: ModalProps) => {
  const [id, setId] = useState<string>("");
  const [id1, setId1] = useState<string>("");
  const [id2, setId2] = useState<string>("");

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>쓰레기통 추가</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="건물 번호"
            value={id}
            onChangeText={(text) => setId(text)}
          />
          <TextInput
            label="건물 이름"
            value={id1}
            onChangeText={(text) => setId1(text)}
          />
          <TextInput
            label="층수"
            value={id2}
            onChangeText={(text) => setId2(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>취소</Button>
          <Button
            onPress={hideDialog}
            mode="contained"
            style={{ paddingHorizontal: 6 }}
          >
            추가
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AddTrashCanModal;
