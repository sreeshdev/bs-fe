import React from "react";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import "./styles.scss";
import Sidebar from "../../component/sidebar";
import TopBar from "../../component/topBar";
import ChartLayout from "../../component/chartLayout";
import PeakForm from "../../component/peakForm";
import PeakTable from "../../component/peakTable";
const PeakAlert = () => {
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
          <PeakForm />
          <PeakTable />
        </div>
      </div>
    </>
  );
};

export default PeakAlert;
