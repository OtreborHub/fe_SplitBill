import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Actions } from '../../utilities/Actions';
import { BuyFormProps } from '../../utilities/interfaces';


export default function BuyForm ({ buyType, handleSubmit, handleChange, DNABalance, currentSupply, tokenPrice } : BuyFormProps) {
  const [inputValue, setInputValue] = useState<number>(1);

  const change = (event: any) => {
    const value = handleChange(event.target.value, buyType);
    setInputValue(value);
  };

  const submit = (event: any) => {
    event.preventDefault();
    handleSubmit(inputValue, buyType);
  };

  return (
    <Box component="form" onSubmit={submit} sx={{ p: 2 }}>
      <Typography variant="body1" gutterBottom>
        {buyType === Actions.BUY_DNA && 
        "Scegli una quantità in wei da trasformare in DNA ( " + tokenPrice + " wei per DNA Token)" 
        }
        {buyType === Actions.BUY_SHARES && 
        "Scegli una quantità in DNA da trasformare in Shares"
        }
        {buyType === Actions.APPROVE_DNA && 
        "Scegli una quantità in DNA da approvare per l'acquisto di Shares"
        }
        {buyType === Actions.UPDATE_PRICE && 
        "Scegli il nuovo prezzo per i DNA Token"
        }
      </Typography>
      <TextField
        type="number"
        placeholder={buyType === Actions.BUY_DNA ? 
          "Max " + currentSupply + " DNA" : 
          buyType === Actions.BUY_SHARES ? 
          "Max " + DNABalance + " Shares" : 
          buyType === Actions.APPROVE_DNA ?
          "Max " + DNABalance + " DNA" : 
          buyType === Actions.UPDATE_PRICE ?
          "default 1 wei" : ""}
        value={inputValue}
        onChange={change}
        fullWidth
        margin="normal"
        id="range-value"
        label={buyType === Actions.BUY_DNA ? 
          "Quantità (in wei)" : 
          buyType === Actions.BUY_SHARES || buyType === Actions.APPROVE_DNA ? 
          "Quantità (in DNA)" : 
          buyType === Actions.UPDATE_PRICE ?
          "Quantità (in wei)" : ""}
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Conferma
        </Button>
      </Box>
    </Box>
  );
};