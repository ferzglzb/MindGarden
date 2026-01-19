import './Progress.css'
import Plant from '../components/Plant'

const HISTORY = [
    { id: 1, date: 'Ayer', level: 1, text: "Plantaste tu primera semilla." },
    { id: 2, date: 'Hoy', level: 2, text: "Tu reflexión nutrió el jardín." },
]

export default function Progress() {
    return (
        <div className="progress-view fade-in">
            <h1 className="progress-title">Tu Viaje</h1>

            <div className="timeline">
                {HISTORY.map((item, index) => (
                    <div key={item.id} className="timeline-item">
                        <div className="timeline-line"></div>
                        <div className={`timeline-dot ${index === 0 ? 'start' : ''}`}></div>

                        <div className="timeline-content">
                            <span className="timeline-date">{item.date}</span>
                            <p className="timeline-text">{item.text}</p>

                            <div className="timeline-preview">
                                {/* Scaled down plant preview */}
                                <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left', height: '150px' }}>
                                    <Plant level={item.level} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
