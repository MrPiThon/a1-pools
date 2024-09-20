import React, { useState } from 'react';
import '../stylesheets/pages/OurCustomersPage.css';

const CustomerPhotos = ({ numPhotos }) => {
    const [loading, setLoading] = useState(true);
    const totalPhotos = 9;
    const photos = Array.from({ length: totalPhotos }, (_, i) => i + 1);

    const getRandomPhotos = (num) => {
        const shuffled = photos.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const displayPhotos = numPhotos ? getRandomPhotos(numPhotos) : photos;

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className="customer-content">
            {loading && <div className="spinner"></div>}
            <div className={`photo-collage ${loading ? 'loading' : ''}`}>
                {displayPhotos.map((num) => (
                    <div className="photo-item" key={num}>
                        <img
                            src={`/assets/our-pools/pool${num}.svg`}
                            alt={`Pool ${num}`}
                            onLoad={handleImageLoad}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerPhotos;