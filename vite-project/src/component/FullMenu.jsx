// import React from "react";
import CategoryMenu from "./CategoryMenu";

const menuData =[
    {
        title: "Coffee",
        items: [
            { name : "Espresso", price: "18k"},
            { name : "Caramel Affogato", price: "35k"},
            { name : "Americano", price: "23k"},
            { name : "Capuccino", price: "28k"},
            { name : "Coffee Latte", price: "28k"},
            { name : "Flat White", price: "28k"},
            { name : "Magic", price: "28k"},
            { name : "Spanish Latte", price: "30k"},
            { name : "Mochaccino", price: "33k"},
            { name : "Hazelnut Mocca", price: "35k"},
            { name : "Caramel Latte", price: "35k"},
            { name : "Vanilla Latte", price: "35k"},
            { name : "Irish Latte", price: "35k"},
            { name : "Hazelnut Latte", price: "35k"},
            { name : "Seasalt Latte", price: "28k"},
            { name : "Chocopresso", price: "38k"},
            { name : "Kopi Klepon", price: "35k"},
            { name : "Coldbrew Apple", price: "35k"},
        ],
    },
    {
        title: "Non Coffee",
        items: [
            { name : "Red Velvet", price: "33k"},
            { name : "Matcha", price: "33k"},
            { name : "Charcoal", price: "33k"},
            { name : "Taro", price: "33k"},
            { name : "Choco Orange", price: "30k"},
            { name : "Choco Madness", price: "35k"},
            { name : "Choco Campfire", price: "30k"},
            { name : "Witch Forest", price: "38k"},
            { name : "Hansel and Gretel", price: "33k"},
            { name : "Strawberry Shortcake", price: "38k"},
            { name : "Mixed Smoothies", price: "45k"},
            { name : "Marigold Tea", price: "30k"},
            { name : "Earl Grey Tea", price: "35k"},
            { name : "Honey Lemon Tea", price: "30k"},
            { name : "Lychee Tea", price: "30k"},
            { name : "Lemongrass Tea", price: "15k"},
            { name : "Classic Tea", price: "15k"},
            { name : "Oolong Tea", price: "15k"},
        ],
    },
    {
        title: "Bites",
        items: [
            { name : "Mix Platter", price: "35k"},
            { name : "Chicken Platter", price: "35k"},
            { name : "Nachos n Cheese", price: "30k"},
            { name : "Animal Fries", price: "28k"},
            { name : "French Fries", price: "25k"},
            { name : "Onion Rings", price: "20k"},
            { name : "Egg n Cheese Toast", price: "25k"},

        ],
    },
    {
        title: "Bowls",
        items: [
            { name : "Loco Moco", price: "45k"},
            { name : "Chicken Rice Lemongrass", price: "35k"},
            { name : "Beef Balado", price: "45k"},
            { name : "APK Crunchy Chicken Fries", price: "45k"},
            { name : "Chop Suey!", price: "30k"},
            { name : "Mushroom Soup", price: "35k"},
            { name : "APK Fried Rice", price: "38k"},
            
        ],
    },
];

const FullMenu = () => {
    return (
        <section id = "FULL MENU"
        className="relative bg-cover bg-center py-24 px-6 md:px-20"
        style={{ backgroundImage: "url('https://i.ibb.co.com/Q7xGCfZR/bg.png')" }}
        >
        <h2 className="text-4xl font-bold mb-6 text-pink-800 text-center"> OUR MENU </h2>
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {menuData.map((category, index) => (
                    <CategoryMenu key={index} {...category} />
                ))}
            </div>
        </div>
        </section>
    );
};

export default FullMenu;