import React from "react";

import { Text } from "react-native";
import { DataTable } from "react-native-paper";

import { theme } from "../core/theme";

const optionsPerPage = [2, 3, 4];

const TrashCanTable = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable style={{ marginTop: 0 }}>
      <DataTable.Header>
        <DataTable.Title> </DataTable.Title>
        <DataTable.Title>일반</DataTable.Title>
        <DataTable.Title>캔/병</DataTable.Title>
        <DataTable.Title>플라스틱</DataTable.Title>
        <DataTable.Title>종이</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1층</DataTable.Cell>
        <DataTable.Cell>
          <Text style={{ color: theme.colors.error }}>100</Text>
        </DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
        <DataTable.Cell>
          <Text style={{ color: theme.colors.error }}>90</Text>
        </DataTable.Cell>
        <DataTable.Cell>10</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>2층</DataTable.Cell>
        <DataTable.Cell>40</DataTable.Cell>
        <DataTable.Cell>
          <Text style={{ color: theme.colors.warning }}>60</Text>
        </DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>3층</DataTable.Cell>
        <DataTable.Cell>
          <Text style={{ color: theme.colors.warning }}>60</Text>
        </DataTable.Cell>
        <DataTable.Cell>30</DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>4층</DataTable.Cell>
        <DataTable.Cell>50</DataTable.Cell>
        <DataTable.Cell>10</DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TrashCanTable;
