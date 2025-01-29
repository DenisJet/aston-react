import { useEffect, useState } from 'react';

export default function HomePage() {
    const [posters, setPosters] = useState([]);
    const [error, setError] = useState(null);

    const movieIds = [
        'tt3896198',
        'tt0111161',
        'tt0133093',
        'tt0068646',
        'tt0073486',
        'tt0109830',
        'tt0137523',
        'tt0110912',
        'tt0076759',
        'tt0099685',
    ];

    const getRandomMovieIds = (count) => {
        const shuffled = [...movieIds].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        const getPosters = async () => {
            const randomMovieIds = getRandomMovieIds(8);

            try {
                const responses = await Promise.all(
                    randomMovieIds.map(id =>
                        fetch(`http://www.omdbapi.com/?i=${id}&apikey=f74be7b4`)
                    )
                );

                const data = await Promise.all(
                    responses.map(response => {
                        if (!response.ok) {
                            throw new Error(`Response status: ${response.statusText}`);
                        }
                        return response.json();
                    })
                );

                const newPosters = data.map(item => ({
                    poster: item.Poster,
                    title: item.Title,
                    year: item.Year
                }));
                setPosters(newPosters);
            } catch (error) {
                setError(error.message);
                console.log(error);
            }
        };

        getPosters();
    }, []);


    return (
        <div>
            {error && <p>Error: {error}</p>} {}
            {posters.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {posters.map((item, index) => (
                        <div key={index} style={{ flex: '0 0 calc(25% - 20px)', textAlign: 'center' }}>
                            <img
                                src={item.poster}
                                alt={`Poster ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover',
                                    borderRadius: '20px'
                                }}
                            />
                            <h4 style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', margin: '10px 0' }}>
                                {item.title} ({item.year}) {}
                            </h4>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

