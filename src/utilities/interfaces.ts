
import { Action } from "./actions";
import { ErrorMessage } from "./Error";

interface LoginCardProps {
    title: string;
    handleLogin: (sessionId: string, username: string) => void;
    handleRegister: (username: string, password: string) => void;
}

interface SidebarProps {
    handleLogout: () => void;
    handleNavigate: (view: string) => void;
}

interface NewMemberProps {
    message: ErrorMessage;
}

interface ProposalProps {
    proposal: Proposal
    handleVote?: (proposalAddress: string, support: boolean, abstain: boolean) => void;
    handleExecute?: (proposalAddress: string) => void;
}

interface ProposalFormProps {
    handleSubmit: (title: string, description: string, recipient?: string, amount?: number) => void;
}

interface BuyFormProps {
    buyType: Action;
    handleSubmit: (amount: number, buyTipe: string) => void;
    handleChange: (amount: number, buyTipe: string) => number;
    DNABalance?: number;
    currentSupply?: number;
    tokenPrice?: number;
}

interface DelegationFormProps {
    delegationType: string;
    handleSubmitDelegation: (memberAddress: string, delegationType: string) => void;
}

interface Proposal {
    address: string;
    title: string;
    description: string;
    voteCountPro: number;
    voteCountCon: number;
    voteCountAbstain: number;
    executed: boolean;
    approved: boolean;
    recipient: string;
    amount: number;
}

interface CustomSelectProps {
    input: string;
    handleChanges: () => void;
}

interface LoaderProps {
    loading: boolean
}

export type { SidebarProps, LoginCardProps, NewMemberProps, ProposalProps, Proposal, CustomSelectProps, ProposalFormProps, BuyFormProps, LoaderProps, DelegationFormProps }