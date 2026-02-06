import { Box, InputAdornment, TextField, SvgIcon } from "@mui/material";
import SearchUrl from "../assets/Search.svg?url";
import CancelUrl from "../assets/Cancel.svg?url";

export const SearchBar = ({ value, onChange }:{value: string, onChange: (value: string) => void}) => (
  <TextField
    fullWidth
    placeholder="Search"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="search-input"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Box
            component="img"
            src={SearchUrl}
            className="icon-sm"
            sx={{ color: 'text.secondary' }}
          />
        </InputAdornment>
      ),
      endAdornment: value ? (
        <InputAdornment position="end">
          <Box
            component="img"
            src={CancelUrl}
            className="icon-sm"
            onClick={() => onChange("")}
            sx={{ 
              cursor: 'pointer',
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(94, 86, 231, 0.1)',
                borderRadius: '50%'
              }
            }}
          />
        </InputAdornment>
      ) : null,
    }}
  />
);
