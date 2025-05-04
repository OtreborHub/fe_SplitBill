import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../../Context";
import { useEffect, useState } from "react";
import Group from "../../utilities/Group";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

export default function Groups() {
  const appContext = useAppContext();
  const [groups, setGroups] = useState<Group[]>([]);
  const shouldPay = true; // Simulazione del pagamento, puoi cambiarlo in base alla logica della tua applicazione

  useEffect(() => {
    setGroups([
      new Group("Gruppo 1", "Descrizione Gruppo 1", appContext.account),
      new Group("Gruppo 2", "Descrizione Gruppo 2", appContext.account),
    ]);
    // chiamata a DB per recuperare i gruppi

    // appContext.account.getGroups().then((groups) => {
    //   setGroups(groups);
    //   console.log(groups);
    // });

    // oppure

    // getGroups(appContext.account.getUsername()).then((groups) => {
    //   setGroups(groups);
    //   console.log(groups);
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
          <Box key={index}>
            <Accordion
              sx={{
              backgroundColor: "transparent",
              border: "2px solid #00ffff",
              borderRadius: "8px",
              boxShadow: "none",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
              },
              }}
            >
              <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#00ffff" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ justifyContent: "space-between", textAlign: "right" }}
              >
              <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                }}
              >
                <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  alert(`Chiudi gruppo per ${group.getName()}`)
                }
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
              </AccordionSummary>
              <AccordionDetails>
              <Divider
                style={{
                height: "1px",
                marginBottom: "1rem",
                background:
                  "linear-gradient(90deg, #000000, #5a24cb, #00ffff)",
                width: "100%",
                }}
              />

              <Box
                sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                }}
              >
                <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
                >
                Admins
                </Typography>
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
                >
                {group.getAdmins().map((admin, adminIndex) => (
                  <Box
                  key={adminIndex}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                  >
                  <Typography
                    sx={{ color: "white", textAlign: "right" }}
                    variant="body1"
                  >
                    {admin.getUsername().toUpperCase()}
                  </Typography>
                  </Box>
                ))}
                </Box>
                <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 2,
                }}
                >
                Membri
                </Typography>
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
                >
                {group.getMembers().map((member, memberIndex) => (
                  <Typography
                  key={memberIndex}
                  variant="body1"
                  sx={{ textAlign: "right" }}
                  >
                  {member.getUsername()}
                  </Typography>
                ))}
                </Box>
              </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
    </Box>
  );
}