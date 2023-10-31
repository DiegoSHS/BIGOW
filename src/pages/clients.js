import { Check, Delete, Edit, FileCopyOutlined, PersonAdd, PersonRemove, PersonSearch, RecentActors, ShoppingCartCheckout, StarBorder, Sync } from "@mui/icons-material";
import { Box, Button, Fab, TextField, Typography } from "@mui/material";

export default function Clients() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" letterSpacing={4} textAlign={'center'}>Crédito a clientes</Typography>
            <Box sx={{ display: 'flex', m: 1 }} minWidth={'100%'}>
                <TextField fullWidth sx={{ mx: 1 }} variant="outlined" label='Nombre o número de cliente' size="small" type="search"></TextField>
                <Button sx={{ mx: 1, px: 2 }} startIcon={<PersonSearch />}>Buscar</Button>
            </Box>
            <Box>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<FileCopyOutlined color="primary" />}>Estado de cuenta</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<PersonAdd color="primary" />}>Nuevo cliente</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<Edit color="primary" />}>Modificar cliente</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<PersonRemove color="error" />}>Eliminar cliente</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<RecentActors color="warning" />}>Reporte de saldos</Button>
            </Box>
            <Box sx={{ position: 'fixed', bottom: 100 }}>
                <Fab variant="extended" size="medium" sx={{ m: 1 }}>
                    <Check color="success" sx={{ mr: 1 }} />
                    Aceptar
                </Fab>
            </Box>
        </Box>
    )
}

