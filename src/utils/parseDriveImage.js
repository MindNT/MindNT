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

    // Si ya está en formato visualizable (uc?export=view) o no es de Google Drive, regresarlo tal cual
    return url;
}
