import React, { useState } from "react";

import { View, Text } from "react-native";
import { Switch } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
import PushConfirmModal from "../components/PushConfirmModal";

import { theme } from "../core/theme";

const Notification = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onToggleSwitch = () => {
    setShowDeleteModal(true);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 60,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 15,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>앱 푸시</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <PushConfirmModal
          visible={showDeleteModal}
          setVisible={setShowDeleteModal}
          setIsSwitchOn={setIsSwitchOn}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          padding: 14,
          backgroundColor: "#f1f5f9",
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: 10,
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginBottom: 8,
          }}
        >
          <Icon
            size={25}
            style={{ paddingRight: 8 }}
            name="ios-information-circle-sharp"
            color={theme.colors.error}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                201 제도관
              </Text>
              <Text style={{ fontSize: 9 }}> 10분 전</Text>
            </View>
            <Text style={{ fontSize: 12 }}>일반 쓰레기가 가득 찼습니다!</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: 10,
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginBottom: 8,
          }}
        >
          <Icon
            size={25}
            style={{ paddingRight: 8 }}
            name="ios-warning"
            color={theme.colors.warning}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                201 제도관
              </Text>
              <Text style={{ fontSize: 9 }}> 2시간 전</Text>
            </View>
            <Text style={{ fontSize: 12 }}>
              일반 쓰레기가 50% 이상 찼습니다!
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: 10,
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginBottom: 8,
          }}
        >
          <Icon
            size={25}
            style={{ paddingRight: 8 }}
            name="ios-warning"
            color={theme.colors.warning}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                303 건설관
              </Text>
              <Text style={{ fontSize: 9 }}> 3시간 전</Text>
            </View>
            <Text style={{ fontSize: 12 }}>
              일반 쓰레기가 50% 이상 찼습니다!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;
