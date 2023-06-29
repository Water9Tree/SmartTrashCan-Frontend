import React, { useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import TrashCanTable from "../components/TrashCanTable";
import Button from "../components/Button";

import BuildingDetailModal from "../components/BuildingDetailModal";

interface SwipeProps {
  selectedBuilding: number;
}

const Swipe = ({ selectedBuilding }: SwipeProps) => {
  //TODO 건물 id만 받아오면,
  //여기 코드내에서, id -> 건물 모든 쓰레기통 정보 불러올것임
  const [temp, setTemp] = React.useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteBtnlick = () => {
    setShowDeleteModal(true);
  };

  React.useEffect(() => {
    //ㅎㅎ이건 걍 귀찮아서 박았음
    if (selectedBuilding === 201) setTemp("제도관");
    if (selectedBuilding === 313) setTemp("건설관");
    if (selectedBuilding === 408) setTemp("자연대");
    if (selectedBuilding === 506) setTemp("인문대");
    if (selectedBuilding === 708) setTemp("경암체육관");
  }, [selectedBuilding]);

  const modalizeRef = useRef<any>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  // 80%이상 alert창 ui(빨간색)
  const render80Message = (text: string) => (
    <View
      style={{
        width: "100%",
        backgroundColor: "#faeeed",
        padding: 5,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <Icon
        size={20}
        style={{ paddingRight: 3 }}
        name="ios-information-circle-sharp"
        color="#e51721"
      />
      <Text style={{ color: "#450a0a", fontSize: 12 }}>
        <Text style={{ fontWeight: "600", fontSize: 12 }}>{text} </Text>
        비워야 합니다.
      </Text>
    </View>
  );

  // 50%이상 alert창 ui(노란색)
  const render50Message = (text: string) => (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff7ed",
        padding: 5,
        alignItems: "center",
        // justifyContent: "start",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <Icon
        size={20}
        style={{ paddingRight: 3 }}
        name="ios-warning"
        color="#fdbc08"
      />
      <Text style={{ color: "#422006", fontSize: 12 }}>
        <Text style={{ fontWeight: "600", fontSize: 12 }}>{text} </Text>
        50% 이상
      </Text>
    </View>
  );
  return (
    <>
      {selectedBuilding === 0 ? (
        <View
          style={{
            padding: 35,
            alignItems: "center",
            justifyContent: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            확인할 건물을 클릭해주세요
          </Text>
        </View>
      ) : (
        <>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 20,
              position: "relative",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {selectedBuilding} {temp}
            </Text>
            <Button
              style={{
                right: 4,
                top: 10,
                position: "absolute",
              }}
              onPress={handleDeleteBtnlick}
            >
              자세히
            </Button>
            <BuildingDetailModal
              visible={showDeleteModal}
              setVisible={setShowDeleteModal}
            />
          </View>
          <View style={{ padding: 15 }}>
            <ScrollView>
              {render80Message("1층 일반, 재활용")}
              {render50Message("1층 종이, 플라스틱")}
              {render50Message("2층 플라스틱")}
              {render50Message("3층 일반")}
              {render50Message("4층 플라스틱")}
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};
export default Swipe;
