import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



function createData(LAW_LIC_TYPE, LAW_DESC, BNAME, USER_COUNT, SAPSYSID, MANDT, RANK, LIC_TYPE, RECOM_DESC, CURR_LIC_TYPE, CURR_DESC, USER_STATUS, LOGON_STATUS, EFLAG, PERNR, NAME_FIRST,NAME_LAST,ZPROFCOUNT,ZROLECOUNT,ZTOTCNT,ZMATCOUNT,ZPERCENT,TABNAME,ZCOUNT,ZTYPE,USTYP,CLASS,ACCNT,GLTGV,GLTGB,UFLAG,ERDAT,TRDAT,ACTIVE,LOCK,EXPIRED,REMOTE,REFUSER) {
    return {LAW_LIC_TYPE, LAW_DESC, BNAME, USER_COUNT, SAPSYSID, MANDT, RANK, LIC_TYPE, RECOM_DESC, CURR_LIC_TYPE, CURR_DESC, USER_STATUS, LOGON_STATUS, EFLAG, PERNR, NAME_FIRST,NAME_LAST,ZPROFCOUNT,ZROLECOUNT,ZTOTCNT,ZMATCOUNT,ZPERCENT,TABNAME,ZCOUNT,ZTYPE,USTYP,CLASS,ACCNT,GLTGV,GLTGB,UFLAG,ERDAT,TRDAT,ACTIVE,LOCK,EXPIRED,REMOTE,REFUSER};
}

function createColumn(header, keys) {

    let headers = header.map((value, index) => {
        return {
            name: keys[index],
            label: value,
            options: {
                filter: true,
                sort: true
            }
        }
    })

    return headers;
}


const options = {
    selectableRows: 'none',
    filterType: 'textField',
    fixedHeaderOptions: { xAxis: true, yAxis: true },
    responsive: "scrollMaxHeight",
    search:false,
    searchOpen:false,
    print:false,
    sortFilterList:false,
    rowsPerPage:100,
    rowsPerPageOptions:[100,250,500,1000,2000,5000,10000]
};



const MUGRCReportTable = (props) => {

    const getMuiTheme = () => createMuiTheme({
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
                    borderCollapse: 'collapse'
                }
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
                    lineHeight: "inherit"
                }
            },
            MUIDataTable: {
                responsiveScrollMaxHeight: {
                    maxHeight: '68vh !important',
                    paddingRight: '5px',
                    paddingLeft: '5px'

                },
                paper: {
                    marginTop: 5
                }
            },
            MUIDataTableToolbar: {
                root: {
                    minHeight: 25
                },
                filterPaper: {
                    maxWidth: '20%',
                    maxHeight: '70%'
                },
                actions:{
                    flex: '0 0 auto'
                }
    
            },
            MuiInputLabel:
            {
                formControl:{
                fontSize:12,
                fontFamily:font
            }},
            MuiGridList:{
                root:{
                    margin:'0px !important',
                    paddingBottom:20
                }
            },
            MuiGridListTile:{
                root:{
                    padding:'4px !important'
                },
                tile:{
                    margin: '0 !important'
                }
            },
            MUIDataTableViewCol:{label:{fontSize:12}},
            MuiFormControlLabel:{root:{
                marginRight:0,
                marginBottom:0,
                paddingRight:2
            }},
            MuiIconButton:{root:{
                padding:2
            }},
            MuiTablePagination:{toolbar:{
                minHeight: 25
            }},
            MUIDataTableFilter:{
                header:{
                    marginBottom:0
                },
                root:{
                    padding: '4px 24px 0px 24px',
                    backgroundColor: '#EFF4F9',
                }
            },
            MUIDataTableFilterList: {
                chip: {
                  display: 'none'
                }
              }
       
        }
        })

    const [data, setData] = React.useState(props.data)
    const [header, setHeader] = React.useState(props.header)
    const [color,setColor]=React.useState(props.colors[15])
    const [font,setFont]=React.useState(props.colors[16])
    React.useEffect(() => {
        setData(props.data);
        setHeader(props.header)
        setColor(props.colors[15])
        setFont(props.colors[16])
    }, [props])

    const rows = data.map(p => createData(p.LAW_LIC_TYPE, p.LAW_DESC, p.BNAME, p.USER_COUNT, p.SAPSYSID, p.MANDT, p.RANK, p.LIC_TYPE, p.RECOM_DESC, p.CURR_LIC_TYPE, p.CURR_DESC, p.USER_STATUS, p.LOGON_STATUS, p.EFLAG, p.PERNR, p.NAME_FIRST, p.NAME_LAST, p.ZPROFCOUNT, p.ZROLECOUNT, p.ZTOTCNT, p.ZMATCOUNT, p.ZPERCENT, p.TABNAME, p.ZCOUNT, p.ZTYPE, p.USTYP, p.CLASS, p.ACCNT, p.GLTGV, p.GLTGB, p.UFLAG, p.ERDAT, p.TRDAT, p.ACTIVE, p.LOCK, p.EXPIRED, p.REMOTE, p.REFUSER));

    const columns = createColumn(header, Object.keys(data[0]));


    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={props.name}
                data={rows}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )

}

export default MUGRCReportTable;