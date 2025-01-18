import React, { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Tracks user input
    const [results, setResults] = useState([]); // Stores search results
    const api_key = import.meta.env.VITE_API_KEY;

    // Fetch data on form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm) {
            try {
                const response = await fetch(`https://api.bestbuy.com/v1/products/${searchTerm}.json?apiKey=${api_key}`);
                const data = await response.json();
                setResults(data.includedItemList); // Adjust based on API response structure
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    Search
                </button>
            </form>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                {results.map((result, index) => (
                    <li key={index} style={{ padding: '5px 0', borderBottom: '1px solid #ccc' }}>
                        {result.includedItem}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
