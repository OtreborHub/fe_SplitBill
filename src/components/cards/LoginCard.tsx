import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Swal from "sweetalert2";
import { LoginCardProps } from "../../utilities/interfaces";

export default function LoginCard({ title, handleLogin, handleRegister}: LoginCardProps) {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    function login() {
        if(username === "admin" && password === "admin") {
            console.log("Login successful");
            //Check a backend + JWT token
            const sessionId = btoa(`${username}:${password}`);
            handleLogin(sessionId, username);
        } else {
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: "Invalid credentials",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
        }
    }

    function register() {
        handleRegister(username, password);
    }

    return (
        <Card 
            sx={{ maxWidth: 400, margin: '0 auto', padding: 4, borderRadius: 2, boxShadow: 0, backgroundColor: '#2b2b28', color: 'white' }}>  
            <CardContent>
                <Typography 
                className="baloo2"
                variant="h5" 
                textAlign="center" 
                marginBottom={2} 
                sx={{ fontWeight: 'bold' }}>
                { title }
                </Typography>
                <Typography 
                className="baloo2"
                variant="body1" 
                textAlign="center" 
                marginBottom={2} 
                sx={{ fontStyle: 'italic', color: 'gray' }}>
                "Dividi le spese, semplifica la vita."
                </Typography>
                <Box component="form" noValidate autoComplete="off" sx={{ marginBottom: 2 }}>
                <TextField 
                    fullWidth 
                    label="Username" 
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