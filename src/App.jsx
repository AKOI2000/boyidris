import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import DeleteClient from "./pages/DeleteClient";
import DeleteWorks from "./pages/DeleteWorks";
import DeleteExperience from "./pages/DeleteExperience";

const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Clients = lazy(() => import("./pages/Clients"));
const Experience = lazy(() => import("./pages/Experience"));
const AdminWorks = lazy(() => import("./pages/AdminWorks"));
const Popup = lazy(() => import("./pages/Popup"));
const AddWorks = lazy(() => import("./pages/AddWorks"));
const EditWorks = lazy(() => import("./pages/EditWorks"));
const AddExperience = lazy(() => import("./pages/AddExperience"));
const EditExperience = lazy(() => import("./pages/EditExperience"));
const AddClients = lazy(() => import("./pages/AddClients"));
const EditClients = lazy(() => import("./pages/EditClients"));
const Login = lazy(() => import("./pages/Login"));

function App() {


  
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/works`} element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<Work />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate replace to="Works" />} />
              <Route path="clients" element={<Clients />} />
              <Route path="Works" element={<AdminWorks />} />
              <Route path="experience" element={<Experience />} />
            </Route>
            <Route path="/admin" element={<Popup />}>
              <Route path="work/add" element={<AddWorks />} />
              <Route path="work/edit/:slug" element={<EditWorks />} />
              <Route path="work/delete/:slug" element={<DeleteWorks />} />
              <Route path="experience/add" element={<AddExperience />} />
              <Route path="experience/edit/:id" element={<EditExperience />} />
              <Route path="experience/delete/:id" element={<DeleteExperience />} />
              <Route path="client/add" element={<AddClients />} />
              <Route path="client/edit/:id" element={<EditClients />} />
              <Route path="client/delete/:id" element={<DeleteClient />} />
            </Route>
          </Route>

        </Routes>
      </Suspense>
    </>

    // <PostUpload />
  );
}

export default App;
