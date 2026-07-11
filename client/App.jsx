
export default App;
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProtectedRoute from "./routes/ProtectedRoute";

import AdminDashboard from "./pages/admin/Dashboard";
import FacultyDashboard from "./pages/faculty/Dashboard";
import StudentDashboard from "./pages/student/Dashboard";
import Buildings from "./pages/admin/Buildings";
import Rooms from "./pages/admin/Rooms";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute role="Admin">
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/faculty"
                element={
                    <ProtectedRoute role="Faculty">
                        <FacultyDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student"
                element={
                    <ProtectedRoute role="Student">
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />

        </Routes>

    );

}      

export default App;
                  

            <><Route
    path="/admin"
    element={<ProtectedRoute role="Admin">
        <Dashboard />
    </ProtectedRoute>} /><Route
        path="/admin/buildings"
        element={<ProtectedRoute role="Admin">
            <Buildings />
        </ProtectedRoute>} /><Route
        path="/admin/rooms"
        element={<ProtectedRoute role="Admin">
            <Rooms />
        </ProtectedRoute>} /></>