export function parseDriveImage(url) {
    if (!url) return '';
    
    // Formato común: https://drive.google.com/file/d/ID/view
    if (url.includes('drive.google.com/file/d/')) {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
    }
    
    // Formato alternativo: https://drive.google.com/open?id=ID
    if (url.includes('drive.google.com/open?id=')) {
        const match = url.match(/id=([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
    }

    // Si es un enlace HTTP directo (no de Drive), regresarlo tal cual
    if (url.startsWith('http')) {
        return url;
    }

    // Si es una ruta local del JSON (ej. images/foto1.png), armamos correctamente usando PUBLIC_URL
    // Esto asegura que cargue perfecto en Github Pages sin importar el entorno
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${process.env.PUBLIC_URL}/${cleanUrl}`;
}
