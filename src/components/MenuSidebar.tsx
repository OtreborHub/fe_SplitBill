import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from '../assets/logo.png';
import { Box, Divider } from "@mui/material";
import { SidebarProps } from "../utilities/interfaces";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BalanceIcon from '@mui/icons-material/Balance';
import GroupsIcon from '@mui/icons-material/Groups';

export default function MenuSidebar({ handleLogout, handleNavigate }: SidebarProps) {
	
// 	function logout() {
//     handleLogout();
//   }

// 	function navigate(view: string) {
// 		handleNavigate(view);
// 	}

	return (
			<Box>
			<img src={logo} alt="Logo" style={{ maxHeight: '115px', marginLeft: '15px'}} />
			<Divider style={{ height: '1px', backgroundColor: 'black' }} />
			<List>
					<ListItem button onClick={() => handleNavigate('groups')}>
					<GroupsIcon
						fontSize="medium"
						sx={{ cursor: 'pointer' }}
					/>&nbsp;
					<ListItemText primary="Gruppi" />
					</ListItem>
					<ListItem button onClick={() => handleNavigate('balance')}>
					<BalanceIcon
						fontSize="medium"
						sx={{ cursor: 'pointer' }}
					/>&nbsp;
					<ListItemText primary="Saldo" />
					</ListItem>
					<ListItem button onClick={() => handleNavigate('settings')}>
					<SettingsIcon
						fontSize="medium"
						sx={{ cursor: 'pointer' }}
					/>&nbsp;
					<ListItemText primary="Settings" />
					</ListItem>
					<ListItem button onClick={() => handleLogout()}>
					<LogoutIcon
						fontSize="medium"
						sx={{ cursor: 'pointer' }}
					/>&nbsp;
					<ListItemText primary="Logout" />
					</ListItem>
			</List>
			</Box>
	);
}