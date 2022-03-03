import React from "react";
import "./styles.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IronIcon from "@mui/icons-material/Iron";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="app-title">Grid Manager 2.0</div>
      <div className="divider"></div>
      <div className="user">
        <div className="photo">
          <AccountCircleIcon className="biggerIcon" />{" "}
        </div>
        <div className="userDetail">
          <div className="name">Hey, Jason</div>
          <div className="userId">User Id: </div>
        </div>
      </div>
      <ul>
        <Link to="/dashboard">
          <li>
            <GridViewIcon /> Dashboard
          </li>
        </Link>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="whiteicon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <li className="accordionLi">
              <KeyOutlinedIcon className="accordionIcon" /> E3 Apps
            </li>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/peakAlert">
              <li>
                <CampaignOutlinedIcon /> Peaks Shaving & Alert
              </li>
            </Link>
            <li>
              <HvacOutlinedIcon /> Ventilation
            </li>
            <li>
              <AcUnitIcon /> Cooling
            </li>
            <li>
              <IronIcon /> Heat Pump
            </li>
          </AccordionDetails>
        </Accordion>

        <li>
          <PowerSettingsNewIcon /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
