import { Inventory, ListAlt, PedalBike, People, PointOfSaleSharp, Settings, Storefront } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"

export const NavigationBar = () => {
    return (
        <AppBar color="inherit" sx={{ boxShadow: 0 }}>
            <Toolbar>
                <Link href={'/'} legacyBehavior passHref>
                    <IconButton color="inherit" disableRipple sx={{ mr: 2 }}>
                        <PedalBike sx={{ mr: 1 }}></PedalBike>
                        BIGOW
                    </IconButton>
                </Link>
                <Link href={'/'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<PointOfSaleSharp />}>
                        Ventas
                    </Button>
                </Link>
                <Link href={'/clients'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<People></People>}>
                        Clientes
                    </Button>
                </Link>
                <Link href={'/products'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<ListAlt />}>
                        Productos
                    </Button>
                </Link>
                <Link href={'/inventory'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<Inventory />}>
                        Inventario
                    </Button>
                </Link>
                <Link href={'/settings'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<Settings />}>
                        Configuración
                    </Button>
                </Link>
                <Link href={'/count'} legacyBehavior passHref>
                    <Button sx={{ mx: 1 }} startIcon={<Storefront />}>
                        Corte
                    </Button>
                </Link>
                <Box sx={{ flexGrow: 1 }} ></Box>
                <Typography>
                    Le atiende: Jhon doe
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export const ActualClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <Typography>
            {date.toLocaleString()}
        </Typography>
    )
}


export const BottomBar = () => {
    return (
        <AppBar color="default" position="fixed" sx={{ bottom: 0, top: 'auto' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} ></Box>
                <ActualClock />
            </Toolbar>
        </AppBar>
    )
}
