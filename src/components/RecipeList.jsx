import React from 'react';
import { Link } from 'react-router-dom';
import useFetchRecipes from '../hooks/useFetchRecipes';
import { Card, Spin, Alert } from 'antd';

const RecipeList = () => {
    const { recipes, loading, error } = useFetchRecipes();

    if (loading) return <Spin size="large" className="flex justify-center items-center min-h-screen" />;
    if (error) return <Alert message="Error" description={error.message} type="error" showIcon className="m-4" />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {recipes.map((recipe) => (
                <Card
                    key={recipe.id}
                    title={<Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">{recipe.name}</Link>}
                    
                    className="shadow-light hover:shadow-md"
                >
                    <p>{recipe.ingredients}</p>
                </Card>
            ))}
        </div>
    );
};

export default RecipeList;
