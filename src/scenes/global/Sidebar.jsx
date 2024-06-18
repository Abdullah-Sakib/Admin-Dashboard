/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.gray[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        [`.${menuClasses.button}:hover`]: {
          backgroundColor: "transparent !important",
        },
        [`.${menuClasses.active}`]: {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none",
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            height: "100vh",
          },
          [`.${sidebarClasses.icon}`]: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Menu
          iconShape="square"
          rootStyles={{
            [`.${menuClasses.root}`]: {
              padding: "5px 35px 5px 20px !important",
            },
            [`.${menuClasses.active}`]: {
              color: "#6870fa !important",
            },
            [`.${menuClasses.button}:hover`]: {
              color: "#868dfb !important",
            },
          }}
        >
          {/* LOGO AND MENU ICON HERE  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.gray[100] }}
            rootStyles={{
              [`.${menuClasses.button}:hover`]: {
                backgroundColor: "transparent !important",
              },
              [`.${menuClasses.active}`]: {
                backgroundColor: "transparent !important",
              },
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography varient="h3" color={colors.gray[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={"../../../public/assets/user.png"}
                  alt="profile-user"
                  height="100px"
                  width="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Ron
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              f
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
