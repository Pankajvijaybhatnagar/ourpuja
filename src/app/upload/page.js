// app/page.js
'use client';

import { useState } from 'react';

export default function Home() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) return;

        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setImageUrl(data.imageUrl);
            } else {
                alert(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1>Upload Image to Cloudinary</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>

            {imageUrl && (
                <div>
                    <h4>Uploaded Image</h4>
                    <img src={imageUrl} alt="Uploaded" width="300" />
                </div>
            )}
        </div>
    );
}
