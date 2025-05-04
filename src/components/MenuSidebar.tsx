import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/logo.png";
import { Box, Divider } from "@mui/material";
import { SidebarProps } from "../utilities/interfaces";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import BalanceIcon from "@mui/icons-material/Balance";
import GroupsIcon from "@mui/icons-material/Groups";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function MenuSidebar({ handleLogout, handleNavigate }: SidebarProps) {
	
// 	function logout() {
//     handleLogout();
//   }

// 	function navigate(view: string) {
// 		handleNavigate(view);
// 	}

  //Media Query
  const theme = useTheme();
  const midSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: midSmallScreen ? "row" : "column",
				alignItems: "center",
				justifyContent: midSmallScreen ? "center" : "flex-start",
				width: midSmallScreen ? "100%" : "auto",
			}}
		>
			{!midSmallScreen && 
			<>
			<img
				src={logo}
				alt="Logo"
				style={{
					maxHeight: "115px",
					cursor: "pointer",
					marginBottom: midSmallScreen ? "0" : ".33rem",
					display: midSmallScreen ? "none" : "block",
				}}
				onClick={() => handleNavigate("")}
			/>
				<Divider
					style={{
						height: "1px",
						background: "linear-gradient(90deg, #00ffff, #5a24cb, #000000)",
						width: "100%",
					}}
				/>
			</>
			}
			<List
				sx={{
					display: "flex",
					justifyContent: midSmallScreen ? "space-between" : "flex-start",
					flexDirection: midSmallScreen ? "row" : "column",
					padding: 0,
				}}
			>
				<ListItem
					button
					onClick={() => handleNavigate("groups")}
					sx={{ flexDirection: midSmallScreen ? "column" : "row" }}
				>
					<GroupsIcon fontSize="medium" sx={{ cursor: "pointer" }} />
					{!midSmallScreen && <>&nbsp;</>}
					<ListItemText primary="Gruppi" />
				</ListItem>
				<ListItem
					button
					onClick={() => handleNavigate("balance")}
					sx={{ flexDirection: midSmallScreen ? "column" : "row" }}
				>
					<BalanceIcon fontSize="medium" sx={{ cursor: "pointer" }} />
					{!midSmallScreen && <>&nbsp;</>}
					<ListItemText primary="Saldo" />
				</ListItem>
				<ListItem
					button
					onClick={() => handleNavigate("settings")}
					sx={{ flexDirection: midSmallScreen ? "column" : "row" }}
				>
					<SettingsIcon fontSize="medium" sx={{ cursor: "pointer" }} />
					{!midSmallScreen && <>&nbsp;</>}
					<ListItemText primary="Impostazioni" />
				</ListItem>
				<ListItem
					button
					onClick={() => handleLogout()}
					sx={{ flexDirection: midSmallScreen ? "column" : "row" }}
				>
					<LogoutIcon fontSize="medium" sx={{ cursor: "pointer" }} />
					{!midSmallScreen && <>&nbsp;</>}
					<ListItemText primary="Logout" />
				</ListItem>
			</List>
		</Box>
	);
}