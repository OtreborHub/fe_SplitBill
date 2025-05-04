import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../../Context";
import { useEffect, useState } from "react";
import DTOGroup from "../../utilities/DTOGroup";
import  Group from "./GroupPreview"
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { NavigateProps } from "../../utilities/interfaces";

export default function Groups( {handleNavigate}: NavigateProps) {
  const appContext = useAppContext();
  const [groups, setGroups] = useState<DTOGroup[]>([]);
  const shouldPay = true; // Simulazione del pagamento, puoi cambiarlo in base alla logica della tua applicazione

  useEffect(() => {
    setGroups([
      new DTOGroup(1, "Gruppo 1", "Descrizione Gruppo 1", appContext.account),
      new DTOGroup(2, "Gruppo 2", "Descrizione Gruppo 2", appContext.account),
    ]);
    // chiamata a DB per recuperare i gruppi

    // appContext.account.getGroups().then((groups) => {
    //   setGroups(groups);
    // });

    // oppure

    // getGroups(appContext.account.getUsername()).then((groups) => {
    //   setGroups(groups);
    // });
  }, [appContext.account]);


  return (
    <Box sx={{ padding: 2, textAlignLast: "end", color: "white" }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#6001d4",
          fontWeight: "bold",
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
        }}
        gutterBottom
      >
        Elenco Gruppi
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlignLast: "end",
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="outlined"
            onClick={() => alert("Aggiungi gruppo")}
            sx={{
              color: "#00ffff", 
              borderColor: "#00ffff",
              fontSize: "16px",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              transition: "0.3s",
              "&:hover": {
                color: "#5a24cb", 
                backgroundColor: "#ffffff", 
                borderColor: "#00ffff",
                boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
              },
            }}
          >
            Aggiungi gruppo
          </Button>
        </Box>

        {groups.map((group, index) => (
          <Group
            key={index}
            group={group}
            handleNavigate={handleNavigate}/>
        ))}
      </Box>
    </Box>
  );
}