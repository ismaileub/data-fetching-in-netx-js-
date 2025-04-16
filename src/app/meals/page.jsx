import React from 'react';
import MealSearchInput from './components/MealSearchInput';

const MealsPage = async ({ searchParams }) => {

    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
            //setMeals(data?.meals || []);
            return data.meals;
            //return data.meals ?? [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    const meals = await fetchMeals() ?? [];


    return (
        <div className="p-4  mx-auto">
            <h1 className="text-2xl font-bold mb-4">Meal Finder</h1>

            <MealSearchInput></MealSearchInput>

            {meals?.length === 0 && <p className='text-red-500'>No meals found.</p>}

            <div className='grid grid-cols-4'>
                {meals?.map((meal) => (
                    <div key={meal.idMeal} className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64 rounded mt-2" />
                        <p className="mt-2 text-sm text-gray-700">{meal.strInstructions.slice(0, 200)}...</p>

                        <ul className="mt-2 text-sm">
                            {[...Array(20)].map((_, i) => {
                                const ingredient = meal[`strIngredient${i + 1}`];
                                const measure = meal[`strMeasure${i + 1}`];
                                return ingredient && ingredient.trim() ? (
                                    <li key={i}>✅ {measure} {ingredient}</li>
                                ) : null;
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealsPage;
