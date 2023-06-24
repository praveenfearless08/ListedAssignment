import React from "react";
import "./DashBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import photo from "./photo.jpg";
import Info from "./Info/Info";
import DataChart from "./Data_Chart/DataChart";
import Circle from "./Pie_chart/Circle";

function DashBoard() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="board">
          <h4>Board.</h4>
        </div>
        <div className="board-down">
          <p>
            <span>
              <PieChartRoundedIcon className="icon" />
              DashBoard
            </span>
          </p>
          <p>
            <AccountBalanceWalletIcon className="icon" />
            Transactions
          </p>
          <p>
            <CalendarMonthOutlinedIcon className="icon" />
            Schedules
          </p>
          <p>
            <AccountCircleOutlinedIcon className="icon" />
            Users
          </p>
          <p>
            <SettingsOutlinedIcon className="icon" />
            Settings
          </p>
        </div>
        <div className="board-bottom">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="home-right">
        <div className="dashboard">
          <div className="nav-icon" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="dash">
            <h4>Dashboard</h4>
          </div>
          <div className="profile">
            <div className="search">
              <p>Search...</p>

              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="icon">
              <FontAwesomeIcon className="bell_icon" icon={faBell} />
            </div>
            <div className="photo">
              <img src={photo} alt="" />
            </div>
          </div>
        </div>
        <div className="dash_info">
          <div className="dash-1">
            <Info
              className="info11"
              icon={<AttachMoneyIcon className="icon" />}
              color="#DDEFE0"
              revenue="Total Revenues"
              count="$2,129,430"
            />
          </div>
          <div className="dash-2">
            <Info
              color="#F4ECDD"
              icon={<LocalOfferOutlinedIcon className="icon" />}
              revenue="Total Transactions"
              count="1,520"
            />
          </div>
          <div className="dash-3">
            <Info
              color="#EFDADA"
              icon={<ThumbUpOffAltIcon className="icon" />}
              revenue="Total Likes"
              count="9,721"
            />
          </div>
          <div className="dash-4">
            <Info
              color="#DEE0EF"
              icon={<AccountCircleOutlinedIcon className="icon" />}
              revenue="Total Users"
              count="892"
            />
          </div>
        </div>
        <div className="data-chart">
          <DataChart />
        </div>
        <div className="last-div">
          <div className="product">
            <div className="product-top">
              <div className="product-title">Top Products</div>
              <div className="product-date">
                May-June 2021
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="product-bottom">
              <div className="product-circle">
                <Circle />
              </div>
              <div className="product-info">
                <div className="product-info1">
                  <div className="product-dot1"></div>
                  <div className="product-info-main">
                    <h5>Basic Tree</h5>
                    <p>55%</p>
                  </div>
                </div>
                <div className="product-info1">
                  <div className="product-dot2"></div>
                  <div className="product-info-main">
                    <h5>Custom Short Pant</h5>
                    <p>31%</p>
                  </div>
                </div>
                <div className="product-info1">
                  <div className="product-dot3"></div>
                  <div className="product-info-main">
                    <h5>Super Hoodies</h5>
                    <p>14%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="top-schedule">
              <div className="today-schedule">Today's Schedule</div>
              <div className="see-schedule">
                See All
                <p style={{ paddingLeft: "3px" }}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </p>
              </div>
            </div>
            <div className="bottom-schedule">
              <div className="meeting-1">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <p>14:00-15:00</p>
                <p>at Sunset Road, Kuta, Bali </p>
              </div>
              <div className="meeting-2">
                <h5>Check operation at Giga Factory 1</h5>
                <p>18.00-20.00</p>
                <p>at Central Jakarta </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
