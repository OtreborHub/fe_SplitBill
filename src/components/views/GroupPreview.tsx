import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GroupProps } from "../../utilities/interfaces";

export default function Group({ group, handleNavigate }: GroupProps) {

	return (
		<Box
			sx={{
				backgroundColor: "transparent",
				border: "2px solid #00ffff",
				borderRadius: "8px",
				padding: 2,
				transition: "0.3s",
				"&:hover": {
					boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
				},
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
				<Button
					variant="outlined"
					size="small"
					onClick={() => alert(`Chiudi gruppo per ${group.getName()}`)}
					sx={{
						color: "#5a24cb",
						borderColor: "#5a24cb",
						fontWeight: "bold",
						"&:hover": {
							backgroundColor: "#f0f0f0",
							borderColor: "#5a24cb",
						},
					}}
				>
					Chiudi gruppo
				</Button>
				<Button
					variant="outlined"
					size="small"
					onClick={() => handleNavigate("group/" + group.getId())}
					sx={{
						color: "#00ffff",
						borderColor: "#00ffff",
						fontWeight: "bold",
						fontSize: "14px", // Adjusted to match Chiudi gruppo
						"&:hover": {
							color: "#5a24cb",
							backgroundColor: "#ffffff",
							borderColor: "#00ffff",
							boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
						},
					}}
				>
					Dettagli
				</Button>
			</Box>
			<Box
				sx={{ marginRight: 2, textAlign: "right", flex: 1 }}
			>
				<Typography
					variant="h6"
					component="h2"
					sx={{
						fontWeight: "bold",
						color: "white",
						textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
					}}
				>
					{group.getName()}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "white",
						textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
					}}
				>
					{group.getDescription()}
				</Typography>
			</Box>
			<Box
				component="img"
				src={group.getImage()}
				alt="Group"
				sx={{
					color: "white",
					width: 50,
					height: 50,
					borderRadius: "50%",
				}}
			/>
		</Box>
	);

}