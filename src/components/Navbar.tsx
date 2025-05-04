import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppContext } from '../Context';
import logo from '../assets/logo.png';

export default function Navbar() {
  const appContext = useAppContext();

  return (
    <Box sx={{ flexGrow: 1, borderBottom: "2px solid" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2b2b28", boxShadow: 24 }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ maxHeight: '120px' }} />

          <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push content to the right */}

          {appContext.account.getUsername() !== "" && (
            <Box display="flex" alignItems="center">
              <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginRight: 2 }}>
                <Typography 
                  className="baloo2" 
                  variant="h6" 
                  color="#ffffff">
                  {appContext.account.getUsername().charAt(0).toUpperCase() + appContext.account.getUsername().slice(1)}
                </Typography>
                <Avatar 
                  alt="User Avatar" 
                  src="https://via.placeholder.com/40" 
                  sx={{ width: 40, height: 40, marginTop: 1 }} 
                />
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}