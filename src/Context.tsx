import { createContext, useContext, ReactNode, useState } from "react";
import { Role } from "./utilities/Role";
import Account from "./utilities/Account";

const appContext = createContext({
  updateUsername: (username: string) => {},
  updateSessionId: (sessionId: string) => {},
  updateAccount: (account: Account) => {},
  // updateChainId: (chainId: number) => {},
  // updateSigner: (signer: string) => {},
  // updateBalance: (balance: number) => {},
  // updateDNABalance: (DNABalance: number) => {},
  // updateAllowance: (allowance: number) => {},
  // updateShares: (shares: number) => {},
  // updateRole: (role: Role) => {},
  // updateCurrentSupply: (currentSupply: number) => {},
  // updateTokenPrice: (tokenPrice: number) => {},
  sessionId: "",
  username: "",
  account: new Account("", ""),
  // chainId: 0,
  // signer: "",
  // balance: 0,
  // DNABalance: 0,
  // allowance: 0,
  // shares: 0,
  // role: Role.NONE,
  // currentSupply: 0,
  // tokenPrice: 0
});

export function useAppContext() {
  return useContext(appContext);
}

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [account, setAccount] = useState<Account>(new Account("", ""));
  const [username, setUsername] = useState<string>("");
  // const [chainId, setChainId] = useState<number>(0);
  // const [signer, setSigner] = useState<string>("")
  // const [balance, setBalance] = useState<number>(0);
  // const [DNABalance, setDNABalance] = useState<number>(0);
  // const [allowance, setAllowance] = useState<number>(0);
  // const [shares, setShares] = useState<number>(0);
  // const [role, setRole] = useState<Role>(Role.NONE);
  
  // const [currentSupply, setCurrentSupply] = useState<number>(0);
  // const [tokenPrice, setTokenPrice] = useState<number>(0);

  function updateIsLogged(saleActive: boolean) { setIsLogged(saleActive); }
  function updateSessionId(sessionId: string) { setSessionId(sessionId); }
  function updateUsername(username: string) { setUsername(username); }
  function updateAccount(account: Account) { setAccount(account); } 

  // function updateChainId(chainId: number) { setChainId(chainId); }
  
  // function updateSigner(signer: string) { setSigner(signer); }
  
  // function updateBalance(balance: number) { setBalance(balance); }
  
  // function updateDNABalance(DNABalance: number) { setDNABalance(DNABalance); }

  // function updateAllowance(allowance: number) { setAllowance(allowance); }

  // function updateShares(shares: number) { setShares(shares); }
  
  // function updateRole(role: Role) { setRole(role); }

  // function updateCurrentSupply(currentSupply: number) { setCurrentSupply(currentSupply); }

  // function updateTokenPrice(tokenPrice: number) { setTokenPrice(tokenPrice); }

  return (
    <appContext.Provider value={{
      updateSessionId, updateUsername,
      updateAccount, sessionId, username, account
      // updateChainId, updateSigner, updateBalance, 
      // updateDNABalance, updateShares, updateRole, updateSaleActive, 
      // updateAllowance, updateCurrentSupply, updateTokenPrice,
      // chainId, signer, balance,
      // DNABalance, shares, role, saleActive, 
      // allowance, currentSupply, tokenPrice
      }}>
        {children}
    </appContext.Provider>
  );
}