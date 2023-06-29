import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import Icon from "react-native-vector-icons/Ionicons";
import TrashCanTable from "../components/TrashCanTable";

interface SwipeProps {
  selectedBuilding: number;
}

const Swipe = ({ selectedBuilding }: SwipeProps) => {
  //TODO 건물 id만 받아오면,
  //여기 코드내에서, id -> 건물 모든 쓰레기통 정보 불러올것임
  const [temp, setTemp] = React.useState("");

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
      <Text style={{ color: "#450a0a" }}>
        <Text style={{ fontWeight: "600" }}>{text} </Text>
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
      <Text style={{ color: "#422006" }}>
        <Text style={{ fontWeight: "600" }}>{text} </Text>
        50% 이상
      </Text>
    </View>
  );
  return (
    <Modalize
      ref={modalizeRef}
      modalStyle={s.content__modal}
      alwaysOpen={250}
      handlePosition="inside"
    >
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
              fontSize: 18,
              fontWeight: "500",
              color: "#333",
            }}
          >
            확인할 건물을 클릭해주세요
          </Text>
        </View>
      ) : (
        <>
          <View style={s.content__header}>
            <Text style={s.content__heading}>
              {selectedBuilding} {temp}
            </Text>
          </View>
          <View style={s.content__inside}>
            {render80Message("1층 일반, 재활용")}
            {render50Message("1층 종이")}
            {render50Message("2층 플라스틱")}
            <TrashCanTable />
          </View>
        </>
      )}
    </Modalize>
  );
};
export default Swipe;

// 슬라이드바 커스텀 (예시코드에서 가져옴)
// TODO 안드로이드는 shadow적용안됨. 더 찾아보기
const s = StyleSheet.create({
  content__header: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  content__modal: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 20,
  },
  content__heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },

  content__inside: {
    padding: 15,
  },
});
