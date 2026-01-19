import { Link, useLocation } from 'react-router-dom'
import { Flower, PenTool, BarChart2 } from 'lucide-react'
import './Navigation.css'

export default function Navigation() {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <nav className="bottom-nav">
            <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Flower size={24} />
                <span>Jardín</span>
            </Link>
            <Link to="/reflect" className={`nav-item ${isActive('/reflect') ? 'active' : ''}`}>
                <PenTool size={24} />
                <span>Reflexión</span>
            </Link>
            <Link to="/progress" className={`nav-item ${isActive('/progress') ? 'active' : ''}`}>
                <BarChart2 size={24} />
                <span>Progreso</span>
            </Link>
        </nav>
    )
}
