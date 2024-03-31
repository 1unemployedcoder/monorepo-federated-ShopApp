import { Outlet } from 'react-router-dom'
export const App = () => {
    return (
        <div>
            <h1>Гнида</h1>
            <Outlet />
        </div>
    )
}
