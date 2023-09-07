import React, { useState } from "react";
import { Button, Dialog, Portal } from "react-native-paper";
import TextInput from "../TextInput";
import { useAddFloorMutation, useAddTrashCanMutation } from "../../api/apis";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFloorModal = ({ visible, setVisible }: ModalProps) => {
  const [buildingNumber, setBuildingNumber] = useState<string>("");
  const [floor, setFloor] = useState<string>("");

  const { mutate: addFloor } = useAddFloorMutation();
  const { mutate: addTrashCan } = useAddTrashCanMutation();

  const hideDialog = () => {
    addFloor(
      { buildingNumber: Number(buildingNumber), floorNumber: Number(floor) },
      {
        onSuccess: () => {
          console.log("쓰레기통 추가  생성 성공!");
          // setVisible(false);
          // addTrashCan(
          //   {
          //     buildingNumber: Number(buildingNumber),
          //     floorNumber: Number(floor),
          //   },
          //   {
          //     onSuccess: () => {
          //       console.log(" 쓰레기통 생성 성공!");
          //       setVisible(false);
          //     },
          //   }
          // );
        },
      }
    );
    // setVisible(false);
    // addTrashCan(
    //   {
    //     buildingNumber: Number(buildingNumber),
    //     floorNumber: Number(floor),
    //   },
    //   {
    //     onSuccess: () => {
    //       console.log(" 쓰레기통 생성 성공!");
    //       setVisible(false);
    //     },
    //   }
    // );
  };
  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>건물별 층 추가</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="건물 번호"
            value={buildingNumber}
            onChangeText={(text) => setBuildingNumber(text)}
          />
          <TextInput
            label="층수"
            value={floor}
            onChangeText={(text) => setFloor(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>취소</Button>
          <Button
            onPress={() => {
              hideDialog();
            }}
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

export default AddFloorModal;
