import React, { useEffect, useState } from "react";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import "./styles.scss";
import Sidebar from "../../component/sidebar";
import TopBar from "../../component/topBar";
import ChartLayout from "../../component/chartLayout";
import PeakForm from "../../component/peakForm";
import PeakTable from "../../component/peakTable";
import alert from "../../services/alertServices";
import { toast } from "react-toastify";
const PeakAlert = () => {
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(false);
  const [editData, setEditData] = useState({});
  useEffect(() => {
    getAlert();
  }, []);
  const getAlert = () => {
    alert
      .getAllAlert()
      .then((data) => {
        console.log(data);
        addRows(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addRows = (data) => {
    let newRows = [];
    data.forEach((row) => {
      newRows.push(
        createData(
          row.id,
          row.name,
          row.criteria,
          row.value,
          row.email,
          row.phone,
          row.days
        )
      );
    });
    setRows(newRows);
  };
  const editAlert = (row) => {
    setEditData(row);
    setEditRow(true);
  };
  function createData(id, name, criteria, value, email, phone, days) {
    return { id, name, criteria, value, email, phone, days };
  }
  return (
    <>
      <div className="disp-col">
        <TopBar
          title={"Peak Shaving & Alert"}
          isRight={true}
          rightContent={
            <>
              <div>Carisberg Group</div>
              <NotificationsActiveOutlinedIcon />
            </>
          }
        ></TopBar>
        <ChartLayout></ChartLayout>
        <div className="disp-row">
          <PeakForm
            getAlert={getAlert}
            editRow={editRow}
            editData={editData}
            setEditRow={setEditRow}
            setEditData={setEditData}
          />
          <PeakTable rows={rows} getAlert={getAlert} editAlert={editAlert} />
        </div>
      </div>
    </>
  );
};

export default PeakAlert;
