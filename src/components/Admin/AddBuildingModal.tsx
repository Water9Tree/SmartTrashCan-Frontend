import React, { useState } from "react";
import { Button, Dialog, Portal } from "react-native-paper";
import TextInput from "../TextInput";
import { useAddBuildingMutation } from "../../api/apis";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBuildingModal = ({ visible, setVisible }: ModalProps) => {
  const [buildingNumber, setBuildingNumber] = useState<string>("");
  const [buildingName, setBuildingName] = useState<string>("");

  const { mutate: addBuilding } = useAddBuildingMutation();

  const hideDialog = () => {
    addBuilding(
      { buildingNumber: Number(buildingNumber), buildingName },
      {
        onSuccess: () => {
          setVisible(false);
        },
      }
    );
  };

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>건물 추가</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="건물 번호"
            value={buildingNumber}
            onChangeText={(text) => setBuildingNumber(text)}
          />
          <TextInput
            label="건물 이름"
            // value={buildingName}
            onChangeText={(text) => setBuildingName(text)}
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

export default AddBuildingModal;
