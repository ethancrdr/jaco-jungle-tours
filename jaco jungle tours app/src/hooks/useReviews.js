import { useState, useEffect } from 'react';

const SEED_REVIEWS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "USA",
        text: "The highlight of our trip to Costa Rica! The horses were gentle and the guides were knowledgeable. The sunset view was absolutely breathtaking.",
        rating: 10,
        date: "2024-03-15",
        activity: "Paseo al Atardecer",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Carlos Rodriguez",
        location: "Spain",
        text: "Increíble experiencia. Los caballos están muy bien cuidados y el recorrido por la selva fue mágico. Muy recomendado para familias.",
        rating: 9.5,
        date: "2024-02-28",
        activity: "ATV Waterfall Adventure",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Chen",
        location: "Canada",
        text: "Booking was easy via WhatsApp. The team made us feel safe and comfortable. The beach ride is a must-do in Jaco!",
        rating: 10,
        date: "2024-01-10",
        activity: "Paseo al Atardecer",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export const useReviews = () => {
    const [reviews, setReviews] = useState(() => {
        try {
            const saved = localStorage.getItem('jaco_reviews');
            if (saved) {
                return JSON.parse(saved);
            }
            return SEED_REVIEWS;
        } catch (error) {
            console.error('Error reading reviews from localStorage:', error);
            return SEED_REVIEWS;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('jaco_reviews', JSON.stringify(reviews));
        } catch (error) {
            console.error('Error saving reviews to localStorage:', error);
        }
    }, [reviews]);

    const addReview = (reviewData) => {
        const newReview = {
            id: Date.now(),
            ...reviewData,
            date: new Date().toISOString().split('T')[0],
            rating: reviewData.rating ? reviewData.rating * 2 : 10,
            image: `https://ui-avatars.com/api/?name=${encodeURIComponent(reviewData.name)}&background=random&color=fff`
        };
        setReviews(prev => [newReview, ...prev]);
    };

    return { reviews, addReview };
};
