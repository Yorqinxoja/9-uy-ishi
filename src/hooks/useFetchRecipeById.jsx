import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRecipeById = (id) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    return { recipe, loading, error };
};

export default useFetchRecipeById;
