import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Navbar from '@/Components/Navbar'
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
export const App = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Outlet />
            </Box>
        </>
    )
}
