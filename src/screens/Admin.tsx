import React, { useState } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import { View, Text } from "react-native";

import AddBuildingModal from "../components/Admin/AddBuildingModal";
import AddFloorModal from "../components/Admin/AddFloorModal";
import AddTrashCanModal from "../components/Admin/AddTrashCanModal";
import DeleteTrashCanModal from "../components/Admin/DeleteTrashCanModal";

const Admin = () => {
  const [showAddBuildingModal, setShowAddBuildingModal] = useState(false);
  const [showAddFloorModal, setShowAddFloorModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleAddBuildingBtnlick = () => {
    setShowAddBuildingModal(true);
  };

  const handleAddFloorBtnlick = () => {
    setShowAddFloorModal(true);
  };
  const handleAddBtnlick = () => {
    setShowAddModal(true);
  };
  const handleDeleteBtnlick = () => {
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
      <Button
        icon="plus"
        labelStyle={{ fontSize: 25, fontWeight: "bold" }}
        style={{ marginBottom: 15, width: "80%" }}
        mode="contained"
        onPress={handleAddBuildingBtnlick}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}> 건물 추가</Text>
      </Button>
      <Button
        icon="plus"
        labelStyle={{ fontSize: 25, fontWeight: "bold" }}
        style={{ marginBottom: 15, width: "80%" }}
        mode="contained"
        onPress={handleAddFloorBtnlick}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}> 층 추가</Text>
      </Button>
      <Button
        icon="plus"
        labelStyle={{ fontSize: 25, fontWeight: "bold" }}
        style={{ marginBottom: 15, width: "80%" }}
        mode="contained"
        onPress={handleAddBtnlick}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}> 쓰레기통 추가</Text>
      </Button>
      <Button
        icon="minus"
        labelStyle={{ fontSize: 25, fontWeight: "bold" }}
        style={{ marginBottom: 15, width: "80%" }}
        mode="contained"
        onPress={handleDeleteBtnlick}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}> 쓰레기통 삭제</Text>
      </Button>
      <AddBuildingModal
        visible={showAddBuildingModal}
        setVisible={setShowAddBuildingModal}
      />
      <AddFloorModal
        visible={showAddFloorModal}
        setVisible={setShowAddFloorModal}
      />
      <AddTrashCanModal visible={showAddModal} setVisible={setShowAddModal} />
      <DeleteTrashCanModal
        visible={showDeleteModal}
        setVisible={setShowDeleteModal}
      />
    </View>
  );
};

export default Admin;
