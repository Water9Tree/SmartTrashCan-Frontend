import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, Dialog, Portal, Checkbox } from "react-native-paper";
import TextInput from "../TextInput";
import {useGetAllTrashCanQuery, useDeleteTrashCanMutation} from "../../api/apis";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTrashCanModal = ({ visible, setVisible }: ModalProps) => {
  const hideDialog = () => setVisible(false);
  const [checkList, setCheckList] = React.useState<any>([]); // 체크박스 상태 관리
 
  const { data: trashCanList } = useGetAllTrashCanQuery();
  const { mutate: deleteTrashCan } = useDeleteTrashCanMutation();

  // console.log("으아아ㅏㄱ",trashCanList,checkList)

  const handleButtonClick = () => {
      //  console.log("삭제",checkList)
    checkList?.map((trashCan : any) => {

      deleteTrashCan(
        { buildingNumber: Number(trashCan.buildingNumber), floorNumber: Number(trashCan.floorNumber) },
        {
          onSuccess: () => {
            // console.log("쓰레기통 삭제 성공!");
 
          },
        }
      );
    })
  }

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "#fff" }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={{ fontSize: 16 }}>쓰레기통 삭제</Dialog.Title>
        <Dialog.Content>
          {trashCanList?.map((trashCan : any) => {
            return (
              <View key={`${trashCan.buildingNumber}-${trashCan.floorNumber}`}
                style={{
                  marginBottom: 2,
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "space-between",
                }}
              >
                <Checkbox.Android
                  status={checkList.includes(trashCan) ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckList([...checkList,trashCan]);
                  }}
                />
                <Text style={{ fontSize: 12 }}>
                  {trashCan.buildingNumber} {trashCan.buildingName} {trashCan.floorNumber}층
                </Text>
              </View>
            );
          }  )}
  
 
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>취소</Button>
          <Button
            onPress={handleButtonClick}
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
