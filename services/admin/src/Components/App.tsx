import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Navbar from '@/Components/Navbar'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import IsAuth from '@/Components/isAuth'
export const App = () => {
    const defaultTheme = createTheme()
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Provider store={store}>
                <Navbar />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IsAuth />
                </Box>
            </Provider>
        </ThemeProvider>
    )
}
