// import React from "react";
import PropTypes from "prop-types";

const CategoryMenu = ({ title, items }) => {
    return (

        <div>
                    <div>
                    <h3 className ="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
                    <ul className="space-y-2">
                        {items.map((item, index) => (
                        <li key={index} className="flex justify-between border-b pb-2">
                            <span>{item.name}</span><span>{item.price}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
        </div>

    );
};

CategoryMenu.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })
    ).isRequired,
};


export default CategoryMenu;