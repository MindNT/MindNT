import { IconClick } from '@tabler/icons-react';

export default function ProductBox({ title, description, icon }) {
    return (
        <div className="relative w-[300px] h-[300px] p-4"
            style={{
                background: '#182D45',
                borderRadius: '10px',
            }}>
            
            {/* Icon */}
            <div className="absolute top-0 left-4">
                <div className="w-24 h-24">
                    {icon}
                </div>
            </div>

            {/* Title - subido más cerca del logo */}
            <div className="absolute top-[90px] left-4 max-w-[250px]"
                style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '24px', // Aumentado para mejor legibilidad
                    color: '#FFFFFF',
                }}>
                {title}
            </div>

            {/* Description - manteniendo el mismo espacio desde el título */}
            <div className="absolute top-[150px] left-4 max-w-[250px] text-[#B4B3B3] font-extralight"
                style={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    lineHeight: '20px',
                }}>
                {description}
            </div>

            {/* Know More Link */}
            <div className="absolute bottom-6 right-4 flex items-center gap-2"
                style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '13px',
                    color: '#00DBFF',
                }}>
                Conocer más
                <IconClick size={16} stroke={1.5} />
            </div>
        </div>
    );
}
