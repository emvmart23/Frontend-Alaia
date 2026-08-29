// src/components/layout/ProfileLayout.jsx
import { NavLink, Outlet } from "react-router";

export default function ProfileLayout() {
  return (
   <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <nav 
        style={{ 
          display: "flex", 
          gap: "2.5rem", 
          borderBottom: "1px solid #E5E0D8", 
          paddingBottom: "0.75rem",
          marginBottom: "2rem" 
        }}
      >
        <NavLink 
          to="users/profile" 
          end 
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#5C4033" : "#7A736E",
            fontWeight: isActive ? "600" : "400",
            borderBottom: isActive ? "2px solid #5C4033" : "none",
            paddingBottom: "0.75rem"
          })}
        >
          Mi Perfil
        </NavLink>

        <NavLink 
          to="/profile/orders" 
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#5C4033" : "#7A736E",
            fontWeight: isActive ? "600" : "400",
            borderBottom: isActive ? "2px solid #5C4033" : "none",
            paddingBottom: "0.75rem"
          })}
        >
          Mis Pedidos
        </NavLink>

        <NavLink 
          to="/profile/addresses" 
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#5C4033" : "#7A736E",
            fontWeight: isActive ? "600" : "400",
            borderBottom: isActive ? "2px solid #5C4033" : "none",
            paddingBottom: "0.75rem"
          })}
        >
          Direcciones
        </NavLink>

        <NavLink 
          to="/profile/favorites" 
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#5C4033" : "#7A736E",
            fontWeight: isActive ? "600" : "400",
            borderBottom: isActive ? "2px solid #5C4033" : "none",
            paddingBottom: "0.75rem"
          })}
        >
          Lista de Deseos
        </NavLink>
      </nav>

      {/* Renderizado dinámico de los componentes según la pestaña activa */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
