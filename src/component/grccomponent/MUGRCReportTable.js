import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

function createData(
  SYSID,
  MANDT,
  BNAME,
  ZRISK_TYPE,
  ZRISK_LEVEL,
  APPLCLASS,
  APPLDESC,
  RISKEXE,
  ZAUDIT_ID,
  ZAUDIT_NAME,
  ZVELMIT_ID,
  ZNAME,
  ZCOUNT3,
  ZCOUNT1,
  ZCOUNT2,
  ZCOUNT
) {
  return {
    SYSID,
    MANDT,
    BNAME,
    ZRISK_TYPE,
    ZRISK_LEVEL,
    APPLCLASS,
    APPLDESC,
    RISKEXE,
    ZAUDIT_ID,
    ZAUDIT_NAME,
    ZVELMIT_ID,
    ZNAME,
    ZCOUNT3,
    ZCOUNT1,
    ZCOUNT2,
    ZCOUNT,
  };
}

function createColumn(header, keys) {
  let headers = header.map((value, index) => {
    return {
      name: keys[index],
      label: value,
      options: {
        filter: true,
        sort: true,
      },
    };
  });

  return headers;
}

const MUGRCReportTable = (props) => {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            fontFamily: font,
            fontSize: 13,
            wordWrap: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            padding: "2px",
            textAlign: "left",
            backgroundColor: color,
            //backgroundColor: `#F9F9F9 !important`,
            border: "2px solid rgba(224, 224, 224, 1)",
            borderCollapse: "collapse",
          },
        },
        MUIDataTableHeadCell: {
          root: {
            fontFamily: font,
            fontSize: 14,
            fontWeight: "bold",
            wordWrap: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            border: "1px solid rgba(224, 224, 224, 1)",
            padding: "2px",
            backgroundColor: `${color} !important`,
            //backgroundColor: `#EFF4F9 !important`,
            lineHeight: "inherit",
          },
        },
        MUIDataTable: {
          responsiveScrollMaxHeight: {
            maxHeight: "74vh !important",
            paddingRight: "5px",
            paddingLeft: "5px",
          },
          paper: {
            marginTop: 5,
          },
        },
        MUIDataTableToolbar: {
          root: {
            minHeight: 25,
          },
          filterPaper: {
            maxWidth: "20%",
            maxHeight: "70%",
          },
          actions: {
            flex: "0 0 auto",
          },
        },
        MuiInputLabel: {
          formControl: {
            fontSize: 12,
            fontFamily: font,
          },
        },
        MuiGridList: {
          root: {
            margin: "0px !important",
            paddingBottom: 20,
          },
        },
        MuiGridListTile: {
          root: {
            padding: "4px !important",
          },
          tile: {
            margin: "0 !important",
          },
        },
        MUIDataTableViewCol: { label: { fontSize: 12 } },
        MuiFormControlLabel: {
          root: {
            marginRight: 0,
            marginBottom: 0,
            paddingRight: 2,
          },
        },
        MuiIconButton: {
          root: {
            padding: 2,
          },
        },
        MuiTablePagination: {
          toolbar: {
            minHeight: 25,
          },
        },
        MUIDataTableFilter: {
          header: {
            marginBottom: 0,
          },
          root: {
            padding: "4px 24px 0px 24px",
            backgroundColor: "#EFF4F9",
          },
        },
        MUIDataTableFilterList: {
          chip: {
            display: "none",
          },
        },
      },
    });

  const onTableCellClick = (colData, cellMeta) => {
    console.log(
      colData +
        "---" +
        cellMeta.colIndex +
        "----" +
        cellMeta.colIndex +
        "====" +
        cellMeta.rowIndex +
        "----" +
        cellMeta.dataIndex
    );
    let datapoint = props.data[cellMeta.dataIndex];
    console.log(datapoint, "=================selectedData");
    // console.log(JSON.stringify(datapoint) + datapoint.ZREC);
    props.openDialogue("chart", datapoint);
  };

  const options = {
    selectableRows: "none",
    filterType: "textField",
    fixedHeaderOptions: { xAxis: true, yAxis: true },
    responsive: "scrollMaxHeight",
    search: false,
    searchOpen: false,
    print: false,
    sortFilterList: false,
    rowsPerPage: 100,
    rowsPerPageOptions: [100, 250, 500, 1000, 2000, 5000, 10000],
    onCellClick: onTableCellClick,
  };

  const [data, setData] = React.useState(props.data);
  const [header, setHeader] = React.useState(props.header);
  const [color, setColor] = React.useState(props.colors[15]);
  const [font, setFont] = React.useState(props.colors[16]);
  React.useEffect(() => {
    setData(props.data);
    setHeader(props.header);
    setColor(props.colors[15]);
    setFont(props.colors[16]);
  }, [props]);

  const rows = data.map((p) =>
    createData(
      p.SYSID,
      p.MANDT,
      p.BNAME,
      p.ZRISK_TYPE,
      p.ZRISK_LEVEL,
      p.APPLCLASS,
      p.APPLDESC,
      p.RISKEXE,
      p.ZAUDIT_ID,
      p.ZAUDIT_NAME,
      p.ZVELMIT_ID,
      p.ZNAME,
      p.ZCOUNT3,
      p.ZCOUNT2,
      p.ZCOUNT1,
      p.ZCOUNT
    )
  );

  const columns = createColumn(header, Object.keys(data[0]));
  console.log("Table Details", header, columns, data);

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={props.name}
        data={data}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
};

export default MUGRCReportTable;
