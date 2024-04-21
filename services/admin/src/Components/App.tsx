import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Navbar from '@/Components/Navbar'
import { Outlet, useOutlet } from 'react-router-dom'
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { useOutletEmpty } from '@/hooks/useOutletEmpty'
import ProductList from '@/pages/ProductList'
export const App = () => {
    const outlet = useOutlet()
    const isOutletEmpty = useOutletEmpty(outlet)
    const defaultTheme = createTheme()
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Provider store={store}>
                <Navbar />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {isOutletEmpty ? <ProductList/> : <Outlet />}
                </Box>
            </Provider>
        </ThemeProvider>
    )
}
