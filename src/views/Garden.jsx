import { useNavigate } from 'react-router-dom'
import { Settings } from 'lucide-react'
import Plant from '../components/Plant'
import './Garden.css'

export default function Garden() {
    const navigate = useNavigate()
    // In a real app, this would come from a context or database
    const gardenLevel = 2

    return (
        <div className="garden-view fade-in">
            <header className="garden-header">
                <div className="header-top">
                    <h1>Mi Espacio</h1>
                    <button className="settings-btn" aria-label="Ajustes">
                        <Settings size={20} />
                    </button>
                </div>
                <p className="date-display">{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </header>

            <div className="garden-center">
                <Plant level={gardenLevel} />
            </div>

            <div className="garden-actions">
                <button className="reflect-cta" onClick={() => navigate('/reflect')}>
                    Reflexionar
                </button>
            </div>
        </div>
    )
}
