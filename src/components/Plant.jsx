import './Plant.css'

export default function Plant({ level = 1 }) {
    // Simple representation of growth stages
    // Level 1: Sprout
    // Level 2: Sapling
    // Level 3: Blooming

    return (
        <div className="plant-container">
            <div className="soil"></div>

            {/* Dynamic Plant SVG based on level */}
            <svg width="200" height="300" viewBox="0 0 200 300" className="plant-svg">
                <defs>
                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-sage)" />
                        <stop offset="100%" stopColor="#5C705C" />
                    </linearGradient>
                </defs>

                {/* Stem - Always present, grows with level */}
                <path
                    d={`M100,300 Q100,${300 - (level * 50)} 100,${200 - (level * 30)}`}
                    stroke="#4A5D4A"
                    strokeWidth="4"
                    fill="none"
                    className="stem-anim"
                />

                {/* Leaves - Level 1+ */}
                {level >= 1 && (
                    <g className="leaf-group bloom-1">
                        <ellipse cx="100" cy="200" rx="20" ry="10" fill="url(#leafGradient)" transform="rotate(-45 100 200)" />
                        <ellipse cx="100" cy="200" rx="20" ry="10" fill="url(#leafGradient)" transform="rotate(45 100 200)" />
                    </g>
                )}

                {/* Leaves - Level 2+ */}
                {level >= 2 && (
                    <g className="leaf-group bloom-2">
                        <ellipse cx="100" cy="150" rx="25" ry="12" fill="url(#leafGradient)" transform="rotate(-30 100 150)" />
                        <ellipse cx="100" cy="150" rx="25" ry="12" fill="url(#leafGradient)" transform="rotate(30 100 150)" />
                    </g>
                )}

                {/* Flower - Level 3+ */}
                {level >= 3 && (
                    <g className="flower bloom-3">
                        <circle cx="100" cy="100" r="15" fill="#F5E6D3" />
                        <circle cx="100" cy="80" r="10" fill="white" opacity="0.8" />
                        <circle cx="120" cy="100" r="10" fill="white" opacity="0.8" />
                        <circle cx="100" cy="120" r="10" fill="white" opacity="0.8" />
                        <circle cx="80" cy="100" r="10" fill="white" opacity="0.8" />
                    </g>
                )}
            </svg>
        </div>
    )
}
