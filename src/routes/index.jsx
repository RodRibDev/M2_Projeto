import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/login";
import { CadastroPage } from "../pages/cadastro/cadastro";
import { HomePage } from "../pages/dashboard/home/home";
import { TemplatePrivateRoute } from "../templates/private-route";
import { CadastroLocais } from "../pages/dashboard/cadastroLocais/cadastroLocais";
import { ListaLocais } from "../pages/dashboard/listaLocais/listaLocais";
import { Local } from "../pages/dashboard/local/local";
import { EditarLocal } from "../pages/dashboard/editarLocal/editarLocal";

export function AppRoutes() {
    return (
        <Routes>
            
            <Route path="/" element={<LoginPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/cadastro" element={<CadastroPage />} />
            
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
                <Route path="/dashboard/cadastrolocais" element={<CadastroLocais />}/>
                <Route path="/dashboard/listalocais" element={<ListaLocais />}/>
                <Route path="/dashboard/local/:id" element={<Local />}/>
                <Route path="/dashboard/editarlocal/:id" element={<EditarLocal />}/>
            </Route>
        </Routes>
    )
} 