import React from 'react';
import {
    IconFileSpreadsheet,
    IconSettingsAutomation,
    IconDatabase,
    IconServer,
    IconLayoutDashboard,
} from '@tabler/icons-react';

/* ─────────────── Conector animado ─────────────── */
function Conector({ vertical }) {
    if (vertical) {
        return (
            <div className="flex justify-center md:hidden h-9 shrink-0">
                <svg width="8" height="36" viewBox="0 0 8 36" className="overflow-visible">
                    <line x1="4" y1="0" x2="4" y2="27" stroke="rgba(106,175,240,0.55)" strokeWidth="1.5" strokeDasharray="4 4" className="eco-dash" />
                    <path d="M1 26 L4 33 L7 26" fill="none" stroke="rgba(106,175,240,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        );
    }
    return (
        <div className="hidden md:flex items-center self-start h-16 w-11 shrink-0">
            <svg width="44" height="10" viewBox="0 0 44 10" className="overflow-visible">
                <line x1="0" y1="5" x2="35" y2="5" stroke="rgba(106,175,240,0.55)" strokeWidth="1.5" strokeDasharray="4 4" className="eco-dash" />
                <path d="M33 1.5 L39 5 L33 8.5" fill="none" stroke="rgba(106,175,240,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

/* ─────────────── EcosistemaDiagrama ───────────────
 * Flujo ETL completo: Excel → ETL → Base de datos → API Server → Dashboard
 */
function EcosistemaDiagrama() {
    const nodes = [
        { id: 'excel', icon: <IconFileSpreadsheet size={26} stroke={1.6} />, label: 'Excel', sub: 'Dato crudo' },
        { id: 'etl', icon: <IconSettingsAutomation size={26} stroke={1.6} />, label: 'ETL', sub: 'Transforma y limpia' },
        { id: 'db', icon: <IconDatabase size={26} stroke={1.6} />, label: 'Base de datos', sub: 'Depósito limpio' },
        { id: 'api', icon: <IconServer size={26} stroke={1.6} />, label: 'API Server', sub: 'Sirve los datos' },
        { id: 'dashboard', icon: <IconLayoutDashboard size={26} stroke={1.6} />, label: 'Dashboard', sub: 'Decisión' },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-center">
                {nodes.map((node, idx) => (
                    <React.Fragment key={node.id}>
                        {/* Nodo */}
                        <div className="flex flex-col items-center text-center flex-1 py-3 md:py-0">
                            <div
                                className={`
                                    w-16 h-16 rounded-2xl border flex items-center justify-center transition-colors duration-300
                                    ${
                                        node.id === 'etl'
                                            ? 'bg-[#034EA2]/20 border-[#034EA2] text-white'
                                            : 'bg-[#0f0f0f] border-white/15 text-white'
                                    }
                                `}
                            >
                                {node.icon}
                            </div>
                            <p className="mt-3 text-sm font-inter font-medium text-white">{node.label}</p>
                            <p className="mt-0.5 text-xs font-inter font-normal text-gray-400">{node.sub}</p>
                        </div>

                        {/* Conector */}
                        {idx < nodes.length - 1 && <Conector vertical />}
                    </React.Fragment>
                ))}
            </div>

            <style>{`
                @keyframes eco-dash-move {
                    to {
                        stroke-dashoffset: -16;
                    }
                }
                .eco-dash {
                    animation: eco-dash-move 1s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default EcosistemaDiagrama;
