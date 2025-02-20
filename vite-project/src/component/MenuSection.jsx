import MenuCard from "./MenuCard";
import PropTypes from "prop-types";

const MenuSection = ({ title, items, titleColor, titleBgColor }) => {
    return (
        <section 
        id="best-signature-menu"
        className={`py-6 px-6 rounded-lg`}>

            <h2 className={`text-3xl font-semibold text-center py-4 rounded-lg ${titleColor} ${titleBgColor}`}>
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {items.map((item, index) => (
                    <MenuCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

MenuSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    titleColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    PropTypes: PropTypes.string.isRequired
};

export default MenuSection;