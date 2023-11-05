import { Box, Checkbox, Container, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"
import { useState } from "react"

export const NewProduct = () => {
    const [depa, setDepa] = useState(0)
    const handleChange = e => setDepa(e.target.value)
    return (
        <Container maxWidth='xs' sx={{ my: 1 }}>
            <Box>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="text" label='Código de barras'></TextField>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="text" label='Descripción'></TextField>
                <FormControl sx={{ my: 1 }}>
                    <RadioGroup row>
                        <FormControlLabel value={'unidad'} label='Por unidad' control={<Radio></Radio>}></FormControlLabel>
                        <FormControlLabel value={'kit'} label='Cómo paquete (kit)' control={<Radio></Radio>}></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="number" label='Precio costo'></TextField>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="number" label='Precio venta'></TextField>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="number" label='Precio mayoreo'></TextField>
                <FormControl sx={{ my: 1 }} fullWidth>
                    <InputLabel id='deplbl'>Departamento</InputLabel>
                    <Select value={depa} label='Departamento' onChange={handleChange} size="small" labelId="deplbl">
                        <MenuItem value={0}><em>Sin departamento</em></MenuItem>
                        <MenuItem value={1}>Departamento 1</MenuItem>
                        <MenuItem value={2}>Departamento 2</MenuItem>
                        <MenuItem value={3}>Departamento 3</MenuItem>
                    </Select>
                </FormControl>
                <Divider>Inventario</Divider>
                <FormControlLabel sx={{ my: 1 }} control={<Checkbox defaultChecked />} label='Este producto utiliza inventario'></FormControlLabel>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="number" label='Cantidad actual'></TextField>
                <TextField sx={{ my: 1 }} fullWidth variant="outlined" size="small" type="number" label='Mínimo'></TextField>
            </Box>
        </Container>
    )
}
