
import { useEffect, useState } from "react";
import "./App.css";
import { useAppContext } from "./Context";
import Navbar from "./components/Navbar";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";
import LoginCard from "./components/cards/LoginCard";
import Drawer from "@mui/material/Drawer";
import MenuSidebar from "./components/MenuSidebar";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Account from "./utilities/Account";
import Groups from "./components/views/Groups";



export default function App() {
  const [path, setPath] = useState<string>("");

  //Media Query
  const theme = useTheme();
  const midSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const appContext = useAppContext();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if(!logged()){
      renderLoginCard();
    }else{
      MySwal.close();
    }
  }, [appContext.account]);


  function renderLoginCard() {
    MySwal.fire({
      html: <LoginCard title="Login" handleLogin={login} handleRegister={register} />,
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: {
        popup: "blackborder-swal",
      },
    });
  }

  function login(sessionId: string, username: string) {
    if (sessionId) {
      var account = new Account(username, sessionId);
      appContext.updateAccount(account);
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }

  function register(email: string, password: string){
    console.log("Register clicked:" + email + " " + password);
  }

  function logout(){
    appContext.updateAccount(new Account("", ""));
    console.log("Logout successful");
  }

  function navigate(path: string){
    setPath(path);
    console.log("Navigate to: " + path);
  }

  const logged = () => {
    return appContext.account.getSessionId() !== "";
  }

   async function connectWallet() {
  //   try{
  //     if(window.ethereum){
  //         const provider = new ethers.BrowserProvider(window.ethereum);
  //         appContext.updateProvider(provider);

  //         const signer = await provider.getSigner();
  //         appContext.updateSigner(signer.address);

  //         setAccountBalance(provider, signer.address);
  //         appContext.updateChainId(parseInt(window.ethereum.chainId));

  //         init(signer.address);
        
  //     } else {
  //       let provider = new ethers.InfuraProvider("sepolia" , process.env.INFURA_API_KEY);
  //       appContext.updateProvider(provider);
        
  //       const signer = await provider.getSigner();
  //       appContext.updateSigner(signer.address);

  //       setAccountBalance(provider, signer.address);
  //       appContext.updateChainId(parseInt(window.ethereum.chainId));

  //       init(signer.address);
  //     }
  //   } catch {
  //     disconnect();
  //     console.log("Error retrieving BrowserProvider");
  //   }
   }

  // async function disconnect() {
  //   appContext.updateSigner("");
  //   appContext.updateBalance(0);
  // }

  // async function init(signer: string) {
  //   try {
  //       getDAOContractInstance(appContext.provider, signer);
  //       getDNAContractInstance(appContext.provider, signer);
        
  //       const ownerResult: string = await readOwner();
  //       const isOwner = ownerResult === signer;
  //       const isMember = await readMember();
  //       appContext.updateRole(getRole(isOwner, isMember));

  //       const DNABalance: number = await readDNABalance();
  //       appContext.updateDNABalance(Number(DNABalance));
  //       if(Number(DNABalance) > 0){
  //         const allowance: number = await readAllowance();
  //         appContext.updateAllowance(Number(allowance));
  //       }

  //       const saleActive: boolean = await readSaleState();
  //       appContext.updateSaleActive(saleActive);
  //       const currentSupply: number = await readCurrentSupply();
  //       appContext.updateCurrentSupply(Number(currentSupply));
  //       const tokenPrice: number = await readTokenPrice();
  //       appContext.updateTokenPrice(Number(tokenPrice));

  //       if(isMember){
  //         const shares: number = await readShares();
  //         appContext.updateShares(Number(shares));
  //       }

  //   } catch {
  //     console.log("Error contract initialization");
  //   }

  // }

  // async function setAccountBalance(provider: Provider, signer: string){
  //   if(!provider || !signer) return;

  //   await provider.getBalance(signer).then((balance: bigint) => {
  //     const bal = parseFloat(ethers.formatEther(balance));
  //     console.log(`balance available: ${bal.toFixed(18)} ETH`);
  //     appContext.updateBalance(bal);
  //   });
  // }

  // const verifyWalletNetwork = () => {
  //   return appContext.signer && appContext.chainId === SEPOLIA_CHAIN_ID;
  // }

  // const verifyDNABalance = () => {
  //   return appContext.DNABalance > 0;
  // }

  // const verifyRole = () => {
  //   return appContext.role === Role.MEMBER || appContext.role === Role.OWNER;
  // }


  return (
    <div className="App" id="app">

        <Navbar/>
        
        <div className={`main-div ${logged() ? 'logged-in' : ''}`}>
          
          {/* <Box 
            sx={{ paddingTop: "5rem", paddingBottom: "2rem" }} 
          /> */}
        
          {logged() &&
          <>
            <Box sx={{ display: "flex" }}>
              {midSmallScreen ? (
                <Box
                  sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <MenuSidebar handleLogout={logout} handleNavigate={navigate} />
                </Box>
              ) : (
                <Drawer
                  variant="permanent"
                  PaperProps={{
                    sx: { backgroundColor: "#1e1e1e", color: "white", width: "15rem" },
                  }}
                >
                  <MenuSidebar handleLogout={logout} handleNavigate={navigate} />
                </Drawer>
              )}

              <Box sx={{ flexGrow: 1, padding: "1rem", maxWidth: midSmallScreen ? "100%" : "75%", marginLeft: "auto" }}>
                
                {path === "" && (
                  <Typography
                    className="baloo2"
                    variant="h5"
                    textAlign="right"
                    marginBottom={2}
                    sx={{ fontWeight: "bold", color: "white" }}>
                    {midSmallScreen
                      ? "mini"
                      : "Dai uno sguardo alla sidebar per scoprire le funzionalità disponibili"}
                  </Typography>
                )}

                {path === "groups" && <Groups />}
                {/* {path === "balance" && <Balance />} */}
              </Box>
            </Box>
            </>
          }

        {/* { !verifyWalletNetwork() && <NewMemberView message={ErrorMessage.WALLET_ERROR}/> }
        { verifyWalletNetwork() && !verifyRole() && !verifyDNABalance() && <NewMemberView message={ErrorMessage.NO_DNA_TOKEN} />}
        { verifyWalletNetwork() && !verifyRole() && verifyDNABalance() && <NewMemberView message={ErrorMessage.NOT_MEMBER} />}
        { verifyWalletNetwork() && verifyRole() && <ProposalDashboardView /> } */}
      </div>
    </div>
  );
}

