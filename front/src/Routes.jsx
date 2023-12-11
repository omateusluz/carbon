import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const NovoEmail02 = React.lazy(() => import("pages/NovoEmail02"));
const NovoEmail01 = React.lazy(() => import("pages/NovoEmail01"));
const Recuperar03 = React.lazy(() => import("pages/Recuperar03"));
const Recuperar02 = React.lazy(() => import("pages/Recuperar02"));
const Recuperar01 = React.lazy(() => import("pages/Recuperar01"));
const Envio03 = React.lazy(() => import("pages/Envio03"));
const Envio02 = React.lazy(() => import("pages/Envio02"));
const Envio01 = React.lazy(() => import("pages/Envio01"));
const Cadastro = React.lazy(() => import("pages/Cadastro"));
const Detalhes = React.lazy(() => import("pages/Detalhes"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Entrar = React.lazy(() => import("pages/Entrar"));
const Home = React.lazy(() => import("pages/Home"));
const Configuracoes = React.lazy(() => import("pages/Configuracoes"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/envio01" element={<Envio01 />} />
          <Route path="/envio02" element={<Envio02 />} />
          <Route path="/envio03" element={<Envio03 />} />
          <Route path="/recuperar01" element={<Recuperar01 />} />
          <Route path="/recuperar02" element={<Recuperar02 />} />
          <Route path="/recuperar03" element={<Recuperar03 />} />
          <Route path="/novoemail01" element={<NovoEmail01 />} />
          <Route path="/novoemail02" element={<NovoEmail02 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
