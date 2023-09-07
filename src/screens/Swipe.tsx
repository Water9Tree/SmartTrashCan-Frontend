import React from "react";
import { View, Text, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { theme } from "../core/theme";

interface SwipeProps {
  data: any;
  selectedBuilding: number;
}

const Swipe = ({ data, selectedBuilding }: SwipeProps) => {
  //TODO 건물 id만 받아오면,
  //여기 코드내에서, id -> 건물 모든 쓰레기통 정보 불러올것임
  console.log(data);
  const [temp, setTemp] = React.useState<any>();

  React.useEffect(() => {
    const result = data?.find(
      (item: any) => item.buildingId === selectedBuilding
    );
    setTemp(result);
    //ㅎㅎ이건 걍 귀찮아서 박았음
    // if (selectedBuilding === 201) setTemp("제도관");
    // if (selectedBuilding === 313) setTemp("건설관");
    // if (selectedBuilding === 408) setTemp("자연대");
    // if (selectedBuilding === 506) setTemp("인문대");
    // if (selectedBuilding === 708) setTemp("경암체육관");
  }, [selectedBuilding]);

  // 80%이상 alert창 ui(빨간색)
  const render80Message = ({ text }: { text: string }) => (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.middleGray,
        padding: 10,
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
        color={theme.colors.error}
      />
      <Text style={{ fontSize: 12 }}>
        <Text style={{ fontWeight: "700", fontSize: 12 }}>{text}층 </Text> 가득
        찼습니다!
      </Text>
    </View>
  );

  // 50%이상 alert창 ui(노란색)
  const render50Message = ({ text }: { text: string }) => (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.middleGray,
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <Icon
        size={20}
        style={{ paddingRight: 3 }}
        name="ios-warning"
        color={theme.colors.warning}
      />
      <Text style={{ fontSize: 12 }}>
        <Text style={{ fontWeight: "700", fontSize: 12 }}>{text}층 </Text> 50%
        이상 찼습니다!
      </Text>
    </View>
  );
  return (
    <>
      {selectedBuilding === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 15,
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
              {selectedBuilding} {temp?.buildingName}
            </Text>
          </View>
          <View style={{ padding: 15 }}>
            <ScrollView>
              {temp?.over80?.map((floor: number) =>
                render80Message({ text: String(floor) })
              )}
              {temp?.over50?.map((floor: number) =>
                render50Message({ text: String(floor) })
              )}
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};
export default Swipe;
