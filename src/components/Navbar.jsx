
export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__brand">
                <span className="navbar__logo" aria-hidden="true">◆</span>
                <span className="navbar__title">Gestión de Estudiantes</span>
            </div>
        
            <nav className="navbar__links">
                <a href="#" className="navbar__link">Dashboard</a>
                <a href="#" className="navbar__link navbar__link--active">Alumnos</a>
            </nav>
        
            <div className="navbar__actions">
                <button className="navbar__icon-btn" aria-label="Configuración">⚙️</button>
                <button className="navbar__icon-btn" aria-label="Notificaciones">🔔</button>
                <div className="navbar__avatar" aria-label="Perfil de usuario">👤</div>
            </div>
        </header>
    )
}
