import { NewProduct } from '@/components/newproduct'
import { CalendarMonth, Check, Clear, Delete, Edit, FileCopyOutlined, ImportExport, Star } from '@mui/icons-material'
import { Box, Button, Fab, FormControlLabel, RadioGroup, TextField, Typography } from '@mui/material'

export default function Products() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" letterSpacing={4} textAlign={'center'}>Productos</Typography>
            <Box>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<FileCopyOutlined color="primary" />}>Nuevo</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<Edit color="primary" />}>Modificar</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<Delete color="error" />}>Eliminar</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<CalendarMonth color="primary" />}>Ventas por periodo</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<Star color="warning" />}>Promociones</Button>
                <Button variant="contained" color="inherit" sx={{ mx: 1 }} startIcon={<ImportExport color="warning" />}>Importar</Button>
            </Box>
            <NewProduct></NewProduct>
            <Box sx={{ position: 'fixed', bottom: 100 }}>
                <Fab variant="extended" size="medium" sx={{ m: 1 }}>
                    <Check color="success" sx={{ mr: 1 }} />
                    Guardar producto
                </Fab>
                <Fab variant="extended" size="medium" sx={{ m: 1 }}>
                    <Clear color="error" sx={{ mr: 1 }} />
                    Cancelar
                </Fab>
            </Box>
        </Box>
    )
}
