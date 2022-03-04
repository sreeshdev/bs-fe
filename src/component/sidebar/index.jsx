import React from "react";
import "./styles.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IronIcon from "@mui/icons-material/Iron";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Link } from "react-router-dom";
import auth from "../../services/authServices";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  let navigate = useNavigate();
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    borderRadius: "10px",
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon className="whiteicon" />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    padding: 0,
    borderRadius: "10px",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const logout = () => {
    auth.logout();
    navigate("/");
  };
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
            <Link to="/ventilation">
              <li>
                <HvacOutlinedIcon /> Ventilation
              </li>
            </Link>
            <li>
              <AcUnitIcon /> Cooling
            </li>
            <li>
              <IronIcon /> Heat Pump
            </li>
          </AccordionDetails>
        </Accordion>

        <li onClick={logout}>
          <PowerSettingsNewIcon /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
