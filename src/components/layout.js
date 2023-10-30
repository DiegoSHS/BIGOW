import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BottomBar, NavigationBar } from "./navigation"

const defaultTheme = createTheme({
    palette: { mode: "light" }
})

export const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline enableColorScheme />
            <Container sx={{ my: 15, display: 'flex', flexDirection: 'center', alignItems: 'center' }} component={'main'} maxWidth='sm' fixed>
                <NavigationBar />
                {children}
                <BottomBar />
            </Container>
        </ThemeProvider>
    )
}
