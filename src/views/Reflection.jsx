import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'
import './Reflection.css'

const REFLECTION_PROMPTS = [
    "¿Qué agradeces el día de hoy?",
    "¿Cómo te sentiste realmente hoy?",
    "¿Qué pequeña victoria tuviste?",
    "¿Qué te gustaría dejar ir?",
    "¿Qué aprendiste sobre ti mismo hoy?"
]

export default function Reflection() {
    const navigate = useNavigate()
    const [reflection, setReflection] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Random prompt for now (in real app could be daily)
    const [prompt] = useState(() => REFLECTION_PROMPTS[Math.floor(Math.random() * REFLECTION_PROMPTS.length)])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!reflection.trim()) return

        setIsSubmitting(true)

        // Simulate API call / storage
        setTimeout(() => {
            // In a real app, we would update the garden level context here
            navigate('/')
        }, 1500)
    }

    return (
        <div className="reflection-view fade-in">
            <button className="back-button" onClick={() => navigate(-1)}>
                <ArrowLeft size={24} />
            </button>

            <form className="reflection-form" onSubmit={handleSubmit}>
                <div className="prompt-container">
                    <h2 className="prompt-text">{prompt}</h2>
                </div>

                <textarea
                    className="reflection-input"
                    placeholder="Escribe aquí..."
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    rows={5}
                    autoFocus
                />

                <div className="action-area">
                    <button
                        type="submit"
                        className={`submit-button ${reflection.trim() ? 'active' : ''}`}
                        disabled={!reflection.trim() || isSubmitting}
                    >
                        {isSubmitting ? <span className="saving-spinner"></span> : <Send size={24} />}
                    </button>
                </div>
            </form>
        </div>
    )
}
