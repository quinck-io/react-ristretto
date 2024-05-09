import { Route, Routes } from "react-router-dom"
import { RootPage } from "./pages/root"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<RootPage />} />
        </Routes>
    )
}
