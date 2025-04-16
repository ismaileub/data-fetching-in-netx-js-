import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: "force-cache"
    });

    const { data } = await res.json();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>

            {data.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map((product) => (
                        <div
                            key={product._id}
                            className="p-4 border rounded shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 font-medium">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
