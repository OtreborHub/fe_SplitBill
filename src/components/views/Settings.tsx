import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

export default function Settings() {
    return (
			<>
        <div>
            <h1>Settings</h1>
            <p>Details about the settings will be displayed here.</p>
        </div>
				
        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ marginTop: 2 }}>
					<Divider sx={{ width: "100%", backgroundColor: "#00ffff", marginBottom: 1, marginTop: 1}} />
					<FormControlLabel
					control={<Switch color="primary" />}
					label={<Typography color="#ffffff">Switch 1</Typography>}
					labelPlacement="start"
					sx={{ marginBottom: 1 }}
					/>
					<Divider sx={{ width: "100%", backgroundColor: "#00ffff", marginBottom: 1, marginTop: 1 }} />
					<FormControlLabel
					control={<Switch color="primary" />}
					label={<Typography color="#ffffff">Switch 2</Typography>}
					labelPlacement="start"
					/>
					<Divider sx={{ width: "100%", backgroundColor: "#00ffff", marginBottom: 1, marginTop: 1 }} />
        </Box>
			</>
    );
}