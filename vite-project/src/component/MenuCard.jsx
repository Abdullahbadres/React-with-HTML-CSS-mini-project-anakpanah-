// import React from "react";
import PropTypes from "prop-types";

const MenuCard = ({ name, ingredients, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
            <h3 className="text-lg font-semibold bg-gray-100 p-2 rounded">{name}</h3>
            <ul className="list-disc list-inside mt-2 text-sm flex-grow">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <img className="mt-4 rounded-lg shadow-md object-cover h-36 w-full" src={image} alt={name}/>
        </div>
    );
};

MenuCard.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
};

export default MenuCard;