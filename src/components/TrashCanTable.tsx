import React from "react";

import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const TrashCanTable = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable style={{ marginTop: 60 }}>
      <DataTable.Header>
        <DataTable.Title>.</DataTable.Title>
        <DataTable.Title>일반</DataTable.Title>
        <DataTable.Title>캔/병</DataTable.Title>
        <DataTable.Title>플라스틱</DataTable.Title>
        <DataTable.Title>종이</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1층</DataTable.Cell>
        <DataTable.Cell>100</DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
        <DataTable.Cell>90</DataTable.Cell>
        <DataTable.Cell>95</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>2층</DataTable.Cell>
        <DataTable.Cell>50</DataTable.Cell>
        <DataTable.Cell>60</DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>3층</DataTable.Cell>
        <DataTable.Cell>50</DataTable.Cell>
        <DataTable.Cell>60</DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>4층</DataTable.Cell>
        <DataTable.Cell>50</DataTable.Cell>
        <DataTable.Cell>60</DataTable.Cell>
        <DataTable.Cell>25</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TrashCanTable;
