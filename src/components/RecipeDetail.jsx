import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchRecipeById from '../hooks/useFetchRecipeById';
import { Card, Spin, Alert } from 'antd';

const RecipeDetail = () => {
    const { id } = useParams();
    const { recipe, loading, error } = useFetchRecipeById(id);

    if (loading) return <Spin size="large" className="flex justify-center items-center" />;
    if (error) return <Alert message="Error" description={error.message} type="error" showIcon className="m-4" />;

    return (
        <div className="flex justify-center items-center min-h-screen p-6 bg-blue">
        {recipe ? (
            <Card title={recipe.name} bordered={false} className="w-full max-w-lg shadow-lg">
                <p className="mb-4">{recipe.description}</p>
                <p className="mb-4">{recipe.ingredients}</p>
                <img className=' rounded-{24px}' src={recipe.image} alt="" />
            </Card>
        ) : (
            <p>No recipe found.</p>
        )}
    </div>
    );
};

export default RecipeDetail;
