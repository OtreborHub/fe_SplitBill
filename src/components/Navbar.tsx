import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../Context';
import logo from '../assets/logo.png';
import DropdownMenu from './Menu';


export default function Navbar() {
  const appContext = useAppContext();

  return (
    <Box sx={{ flexGrow: 1, borderBottom: "2px solid" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2b2b28", boxShadow: 24 }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ maxHeight: '120px'}} />
          
          <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push content to the right */}
          
          {appContext.account.getUsername() !== "" && (
            <Box display="flex" alignItems="center" >
              <Typography 
                className="baloo2" 
                variant="h5" 
                color="#ffffff" 
                sx={{ mr: 1 }}>
                Benvenuto {appContext.account.getUsername().charAt(0).toUpperCase() + appContext.account.getUsername().slice(1)}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}