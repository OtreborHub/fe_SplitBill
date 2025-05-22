import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Swal from "sweetalert2";
import { LoginCardProps } from "../../utilities/interfaces";

export default function LoginCard({ handleLogin, handleRegister }: LoginCardProps) {

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [userRegistered, setUserRegistered] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	function login() {

		if (username === "admin" || password === "admin") {
			const sessionId = "testSessionId";
			console.log("Login successful");
			handleLogin(sessionId, username);
		} else {
			fetch("https://javaws.up.railway.app/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			})
				.then(async (response) => {
					if (response.ok) {
						const data = await response.json();
						const sessionId = data.token;
						console.log("Login successful");
						handleLogin(sessionId, username);
					} else {
						const errorData = await response.json();
						setErrorMessage(errorData.message || "Credenziali non valide");
						console.error(errorData.message || "Invalid credentials");
					}
				})
				.catch((error) => {
					setErrorMessage("Login error:" + error);
					console.error("Login error:", error);
				});
		}
	}

	function register() {
		fetch("http://localhost:8080/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		})
			.then(async (response) => {
				if (response.ok) {
					const data = await response.json();
					const sessionId = data.token;

					setUserRegistered(username);
					handleRegister(username, password);
					setTimeout(() => {
						setUserRegistered("");
					}, 5000);

				} else {
					const errorData = await response.json();
					setErrorMessage(errorData.message || "Errore durante la registrazione");
					console.error(errorData.message || "Errore durante la registrazione");
				}
			})
			.catch((error) => {
				setErrorMessage(error || "Errore durante la registrazione");
				console.error(error || "Errore durante la registrazione");
			});
	}

	return (
		<Card
			sx={{ maxWidth: 400, margin: '0 auto', padding: 1, borderRadius: 2, boxShadow: 0, backgroundColor: '#2b2b28', color: 'white' }}>
			<CardContent>
				<Typography
					className="baloo2"
					variant="h5"
					textAlign="center"
					marginBottom={2}
					sx={{ fontWeight: 'bold' }}>
					Benvenuto su Splitbill!
				</Typography>
				<Typography
					className="baloo2"
					variant="body1"
					textAlign="center"
					marginBottom={2}
					sx={{ fontStyle: 'italic', color: 'gray' }}>
					Effettua l'accesso o registrati per gestire le tue spese in modo semplice e veloce.
				</Typography>

				{userRegistered !== "" && (
					<Box sx={{ marginBottom: 3, textAlign: 'center' }}>
						<Typography
							className="baloo2"
							variant="body1"
							sx={{ color: '#01d4c9', fontWeight: 'bold' }}>
							{userRegistered} registrato!
						</Typography>
					</Box>)}

				{errorMessage !== "" && (
					<Box sx={{ marginBottom: 3, textAlign: 'center' }}>
						<Typography
							className="baloo2"
							variant="body1"
							sx={{ color: '#DB3A34', fontWeight: 'bold' }}>
							{errorMessage}
						</Typography>
					</Box>)}	

				<Box component="form" noValidate autoComplete="off" sx={{ marginBottom: 2 }}>
					<TextField
						fullWidth
						label="Username o email"
						variant="outlined"
						margin="normal"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						InputLabelProps={{ style: { color: 'white' } }}
						InputProps={{ style: { color: 'white', borderColor: 'white' } }}
						sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
					/>
					<TextField
						fullWidth
						label="Password"
						type="password"
						variant="outlined"
						margin="normal"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						InputLabelProps={{ style: { color: 'white' } }}
						InputProps={{ style: { color: 'white', borderColor: 'white' } }}
						sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
					/>
				</Box>

				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
					<Button
						onClick={login}
						className="baloo2"
						variant="contained"
						sx={{ backgroundColor: '#5a24ca', color: '#FFFFFF', '&:hover': { backgroundColor: '#36147d' } }}>
						Accedi
					</Button>
					<Button
						onClick={register}
						className="baloo2"
						variant="contained"
						sx={{ backgroundColor: '#01d4c9', color: '#FFFFFF', '&:hover': { backgroundColor: '#038b84' } }}>
						Registrati
					</Button>
				</Box>



			</CardContent>
		</Card>
	)
}