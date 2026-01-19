import { useState } from 'react'
import { ArrowRight, Sprout } from 'lucide-react'
import './Onboarding.css'

const slides = [
    {
        text: "MindGarden es tu espacio seguro.",
        subtext: "Sin juicios, sin métricas, solo tú."
    },
    {
        text: "Cultiva tu mente, día a día.",
        subtext: "Pequeños momentos de reflexión hacen crecer tu jardín."
    },
    {
        text: "Todo empieza con una semilla.",
        subtext: "Estás listo para comenzar?",
        isLast: true
    }
]

export default function Onboarding({ onComplete }) {
    const [step, setStep] = useState(0)

    const handleNext = () => {
        if (step < slides.length - 1) {
            setStep(step + 1)
        } else {
            onComplete()
        }
    }

    return (
        <div className="onboarding-container fade-in">
            <div className="onboarding-content">
                <div className="icon-placeholder">
                    {step === 2 && <Sprout size={64} color="var(--color-sage)" />}
                </div>

                <h1 className="onboarding-text">{slides[step].text}</h1>
                <p className="onboarding-subtext">{slides[step].subtext}</p>

                <div className="dots">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === step ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>

            <button className="next-button" onClick={handleNext}>
                {slides[step].isLast ? "Plantar mi jardín" : <ArrowRight size={24} />}
            </button>
        </div>
    )
}
