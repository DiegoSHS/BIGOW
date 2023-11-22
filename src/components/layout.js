import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BottomBar, NavigationBar } from "./navigation"

const defaultTheme = createTheme({
    palette: { mode: "light" }
})

export const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline enableColorScheme />
            <Container sx={{ my: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }} component={'main'} maxWidth='xl' fixed>
                <NavigationBar />
                {children}
                <BottomBar />
            </Container>
        </ThemeProvider>
    )
}
