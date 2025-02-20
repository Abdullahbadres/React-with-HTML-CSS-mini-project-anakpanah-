import Navbar from './component/Navbar';
import Bg from './component/Bg';
import Home from './component/Home';
import MenuSection from './component/MenuSection';
import About from './component/About';
import GoogleMaps from './component/GoogleMaps'
import React, { useState } from 'react';
import FullMenu from './component/FullMenu';



const coffeeMenu = [
  {name:"Kopi Klepon", ingredients:[
    "Espresso", "Steamed Milk", "Vanilla Syrup", "Coconut Ball"
  ], image:"https://i.ibb.co.com/jkZJBGkD/kopiklepon.jpg"},
  {name:"Cold Brew Apple", ingredients:[
    "Concentrated-Coffee", "Apple Juice", "Cinnamon Hints"
  ], image:"https://i.ibb.co.com/F4NxLjr8/coldbrewapel.jpg"},
  {name:"Chocopresso", ingredients:[
    "Espresso", "Chocolate Syrup", "Steamed Milk", "Choco Chips"
  ], image:"https://i.ibb.co.com/SDXPFfVC/chocopresso.jpg"},
  {name:"Coffee Latte", ingredients:[
    "Espresso", "Steamed Milk", "Vanilla Syrup"
  ], image:"https://i.ibb.co.com/BHbD0t6j/coffeelatte.webp"},
  {name:"Caramel Affogato", ingredients:[
    "Espresso", "Caramel Syrup", "A Scoop of Ice Cream" 
  ], image:"https://i.ibb.co.com/fYMWPB8r/caramelaffo.jpg"},
  {name:"Doppio", ingredients:[
    "Espresso", "Espresso",
  ], image:"https://i.ibb.co.com/pjtLXwmM/doppio.jpg"},
];

const nonCoffeeMenu = [
  {name: "Chocorange", ingredients: [
    "Chocolate Syrup", "Orange Juice", "Steamed Milk", "Orange Slice"
  ], image:"https://i.ibb.co.com/XMzj6Br/chocoorange.jpg"},
  {name: "Mixed Smoothies", ingredients: [
    "Blended Yoghurt & Ice Cream", "Slices Strawberries", "Slices Fruit", "Whole Oat",
  ], image: "https://i.ibb.co.com/9Hf9jQD6/smoothiesbowl.jpg"},
  {name: "Charcoal", ingredients:[
    "Dark Choco Syrup", "Baked Caramelyzed Milk", "Hazelnut Syrup"
  ], image: "https://i.ibb.co.com/F4NDj7pR/charcoal.webp"},
  {name: "Strawberry Shortcake", ingredients:[
    "Strawberry Syrup", "Steamed Milk", "Strawberry Slices", "Mini Cheese Cake"
  ], image: "https://i.ibb.co.com/FkKchKC0/strawberryshortcake.webp"},
  {name: "Banana Smoothies", ingredients:[
    "Blended Yoghurt & Ice Cream", "Slices Banana", "Whole Oat", "Cinnamons Hint"
  ], image: "https://i.ibb.co.com/Kc6QkM5r/bananasmoothies.jpg"},
  {name: "Choco Campfire", ingredients:[
    "Dark Choco Syrup", "Baked Caramelyzed Milk", "Hazelnut Syrup"
  ], image: "https://i.ibb.co.com/sLDBC5b/chococampfire.jpg"},
  ];

const bowlMenu = [
  {name: "Chicken Rice Lemongrass", ingredients: [
    "Fried Chicken", "Cooked Rice with Lemongrass", "Additional Sauce"
  ], image: "https://i.ibb.co.com/Vp023DSh/chickenlemongrass.jpg"},
  {name: "Loco Moco", ingredients: [
    "Cooked Rice", "Sunny Side Up Egg", "Beef Patty", "Additional Sauce",
  ], image: "https://i.ibb.co.com/SwF6WQNF/locomoco.jpg"},
  {name: "Chop Suey!", ingredients: [
    "Mixed Veggies", "Mixed Meats", "Sausages", "Mushrooms"
  ], image: "https://i.ibb.co.com/F4cFzPC2/chopsuey.jpg"},
  {name: "Mushroom Soup", ingredients: [
    "Mushrooms", "Other Veggies", "Tomatoes"
  ], image: "https://i.ibb.co.com/5gV9zzdb/mushroomsoup.jpg"},
  {name: "INSTANT NOODLES", ingredients:[
    "Noodles", "Requested Toppings", "Requested Eggs", "Additional Sauce"
  ], image: "https://i.ibb.co.com/ZpckFsYV/instant-noodles.jpg"},
  {name: "Beef Balado", ingredients:[
    "Cooked Rice", "Spicy Smooked Beef", "Additional Sauce", "Sunny Side Up Egg",
  ], image: "https://i.ibb.co.com/d0Zhs5gp/beefbalado.jpg"},
];

const bitesMenu = [
  {name: "Egg n Cheese Toast", ingredients:[
    "Toasted Bread", "Sunny Side Up Egg", "Mozarella and Meats"
  ], image: "https://i.ibb.co.com/LXFd40qN/eggcheesetoast.jpg"},
  {name: "Animal Fries", ingredients:[
    "Chicken Sticks", "Sausages", "Chicken Wings", "Additional Sauce"
  ], image: "https://i.ibb.co.com/VcXLtYrP/animal-fries.jpg"},
  {name: "Mix Platter", ingredients:[
    "Dory", "Shrimp", "Potato Wedges", "Tartar Sauce", "Additional Sauce"
  ], image: "https://i.ibb.co.com/Pv8h25p9/mixplatter.jpg"},
  {name: "Nachos n Cheese", ingredients:[
    "Nachos Chips", "Melted Cheese", "Additional Sauce"
  ], image: "https://i.ibb.co.com/Cpq7ysSh/nachoncheese.jpg"},
  {name: "French Fries", ingredients:[
    "Classic French Fries", "Signature Sauce", "Additional Sauce"
  ], image: "https://i.ibb.co.com/dJGw9xRc/french-fries.jpg"},
  {name: "Onion Rings", ingredients:[
    "Classic Onion Fries", "Signature Sauce", "Additional Sauce"
  ], image: "https://i.ibb.co.com/39Rh124B/onion-ring.jpg"},
];
  
const locationsByCity = {
  "Semarang - Mataram": [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0863595870787!2d110.429623976888!3d-6.999111468554407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c994ab13d29%3A0x8535cdd41e2df4ec!2sAnak%20Panah%20Kopi!5e0!3m2!1sen!2sid!4v1738765984052!5m2!1sen!2sid"
  ],
  "Semarang PLUS - Gajah Mada":[
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31680.694160531057!2d110.41159937709455!3d-6.999063093367747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b376f7d7797%3A0x3e7dcc7bc99bf2bd!2sAnak%20Panah%20Kopi%20Gajah%20Mada%20Plus!5e0!3m2!1sen!2sid!4v1738766034878!5m2!1sen!2sid"
  ,
  ],
  "Semarang - Go Puri Anjasmara":[
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31680.694160531057!2d110.41159937709455!3d-6.999063093367747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f5e3ef0d646f%3A0x5fc698a0b1db1b96!2sAnak%20Panah%20Kopi%20Go%20Puri!5e0!3m2!1sen!2sid!4v1738766068468!5m2!1sen!2sid"
  ,
  ],
  "Semarang Bizz - Tanah Mas":[
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31683.20303788064!2d110.3728941743164!3d-6.962006299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f523997dce23%3A0x954f887115fcb9ea!2sAnak%20Panah%20Kopi%20Bizz!5e0!3m2!1sen!2sid!4v1738766116668!5m2!1sen!2sid"
  ,
  ],
  "Semarang - UNDIP": [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253472.69819135225!2d109.88374178364276!3d-6.9488990318066515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708df08b36515b%3A0xc112733d433780fb!2sAnak%20Panah%20Kopi%20DipoHub!5e0!3m2!1sen!2sid!4v1738766243827!5m2!1sen!2sid"
  ,
  ],
  "Solo - Keprabon": [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253123.27519132028!2d110.52075999453122!3d-7.569400099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a17fe2d2c7529%3A0x92d3100ec62c095f!2sAnak%20Panah%20Kopi%20Bizz%20Keprabon!5e0!3m2!1sen!2sid!4v1738766262223!5m2!1sen!2sid"
  ,
  ],
  "Solo - Solo Baru": [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31638.835676102724!2d110.79721527746634!3d-7.590815325528617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3d4b3a43b54f%3A0x48022ce6062f0662!2sAnak%20Panah%20Kopi%20Plus%20Solo%20Baru!5e0!3m2!1sen!2sid!4v1738766285589!5m2!1sen!2sid"
  ,
  ],
  Yogyakarta: [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0245419322387!2d110.35034537689565!3d-7.787222477279665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59899dd37ce9%3A0x3b5314f2d8376d86!2sAnak%20Panah%20Kopi%20Bizz%20HOS!5e0!3m2!1sen!2sid!4v1738769442395!5m2!1sen!2sid"
  ,
  ],
  Salatiga: [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253472.69819135225!2d109.88374178364276!3d-6.9488990318066515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7911ff24856d%3A0x8e547c09624a3ed2!2sAnak%20Panah%20Kopi%20Salatiga!5e0!3m2!1sen!2sid!4v1738766165281!5m2!1sen!2sid"
    ,
    ],
  Pekalongan: [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9139705068947!2d109.66232077688689!3d-6.900891667537941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70255ccf84d215%3A0xe5350768d3d99af6!2sAnak%20Panah%20Kopi%20%2B%20Pekalongan!5e0!3m2!1sen!2sid!4v1738766361829!5m2!1sen!2sid"
  ,
  ],
  Kudus: [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7120464177774!2d110.84033857688614!3d-6.804841066559153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c579a671535b%3A0xa8e97daa506fbbe6!2sAnak%20Panah%20Kopi%20Kudus!5e0!3m2!1sen!2sid!4v1738766323011!5m2!1sen!2sid"
  ,
  ],
  Jepara: [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4362208358634!2d110.6605544768841!3d-6.592579064449447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711f0023a3e959%3A0x6ca8fd5cab5ce5e7!2sAnak%20Panah%20Kopi%20Jepara!5e0!3m2!1sen!2sid!4v1738766346299!5m2!1sen!2sid"
  ,
  ],
}


function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  function handleFeedbackSubmit(newFeedback) {
    setFeedbackList([...feedbackList, newFeedback]);
    alert("Thankyou for your feedback!");
  }
  return (
    <>
      <Navbar />
      <Bg/>
      <Home/>
      {/* <ImageSlider images = {sliderImages} /> */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <MenuSection 
      title="COFFEE BASED" 
      items={coffeeMenu}
      titleBgColor="bg-amber-100" 
      titleColor="text-amber-700"
    />

    <MenuSection 
      title="NON COFFEE" 
      items={nonCoffeeMenu}
      titleBgColor="bg-sky-100" 
      titleColor="text-sky-800"
    />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
    <MenuSection 
      title="BOWL" 
      items={bowlMenu}
      titleBgColor="bg-slate-200" 
      titleColor="text-yellow-800"
    />

    <MenuSection 
      title="BITES" 
      items={bitesMenu}
      titleBgColor="bg-emerald-100" 
      titleColor="text-emerald-600"
    />
  </div>
</section>
      <FullMenu/>
      <About id="ABOUT-US"
        onSubmitFeedback ={handleFeedbackSubmit}
      />
      <section id="LOCATIONS"
      className="py-12 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6 text-pink-800">
        Find Us
        </h2>
        <GoogleMaps locationsByCity = {locationsByCity}/>
      </section>
    </>
  );
}

export default App
