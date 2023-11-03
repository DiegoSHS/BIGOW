import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"

export const NewProduct = () => {
    return (
        <Box>
            <Box>
                <TextField fullWidth variant="outlined" size="small" type="text" label='Código de barras'></TextField>
                <TextField fullWidth variant="outlined" size="small" type="text" label='Descripción'></TextField>
                <FormControl>
                    <RadioGroup>
                        <FormControlLabel value={'unidad'} control={<Radio></Radio>}></FormControlLabel>
                        <FormControlLabel value={'kit'} control={<Radio></Radio>}></FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
