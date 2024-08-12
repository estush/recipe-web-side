import { useNavigate } from 'react-router'
import '../css/home.css'
export const Home1 = () => {

    const nav = useNavigate()
    const AllRecipe=()=>{
            nav(`/AllRecipe`)
         }
    return <>
      
<body>
    <div className="container">
        <h2 className="title">FlavorFam - A Culinary Odyssey</h2>
        <p className="description">
          
Step into a realm where the aroma of spices dances in the air and the sizzle of ingredients tantalizes the senses. FlavorFam beckons, a haven where culinary enthusiasts converge in a symphony of tastes, textures, and traditions.

Within these digital walls lies a treasure trove of gastronomic delights, an alchemy of recipes sourced from every corner of the globe. From the rich tapestries of Italian pasta to the fiery depths of Asian stir-fries, our virtual kitchen is an atlas of flavors waiting to be explored.

But FlavorFam is more than just a repository of recipes; it is a vibrant community pulsating with life and creativity. Here, seasoned chefs mingle with budding cooks, exchanging anecdotes, techniques, and the occasional kitchen mishap. Every interaction is a celebration, a testament to the unifying power of food.

Join us, dear traveler, and immerse yourself in a world where every dish tells a story, and every bite is a journey. Whether you seek culinary wisdom, inspiration, or simply a friendly chat over a virtual stove, FlavorFam welcomes you with open arms.

So come, kindred spirit, and let us embark on this epicurean adventure together. The table is set, the fire is lit, and the FlavorFam awaits your presence. Bon appétit! 
        </p>
        <div className="burger-slider">
            <div className="slider-wrapper">
            <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/עוף.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">CHICKENS</div>
                            <div className="burger-description">Numerous ways that you can  cook chicken , from classic roast chicken to spicy chicken curry.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/בשרים.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">Savory and hearty, meat dishes offer a wide range of flavors and textures</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/תמונת דף הבית.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">GRANOLA</div>
                            <div className="burger-description">Crunchy and nutritious mix of oats, nuts, seeds, and sweeteners, perfect for breakfast or snacks. Versatile and customizable, offering endless flavor variations to suit any taste.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/גבינה.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">CHEESECAKES</div>
                            <div className="burger-description">Creamy and indulgent, cheesecake is a decadent dessert loved by many for its rich flavor and smooth texture.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/עוגיות.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">COOKIES</div>
                            <div className="burger-description"> Crisp or chewy, sweet or savory, cookies are a delightful treat enjoyed by all ages, perfect for dunking in milk or pairing with a cup of tea.
                        </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                     </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/שוקולד.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">CHOCOLATE CAKE</div>
                            <div className="burger-description">Rich and decadent, chocolate cake is a beloved dessert that satisfies any sweet tooth with its deep cocoa flavor and moist crumb.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/סלט.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">SALADS</div>
                            <div className="burger-description">Refreshing and versatile, salads offer a combination of crisp vegetables, fruits, proteins, and dressings, perfect for a light and nutritious meal. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/עוגה.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">CAKES</div>
                            <div className="burger-description"> Whether it's a classic vanilla sponge, a decadent chocolate layer cake, or a whimsical red velvet creation, there's a cake for every taste and celebration.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/מרק1.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">SOUPS</div>
                            <div className="burger-description">From creamy tomato bisque to hearty chicken noodle soup to spicy chili, soups offer endless variations to suit any palate and dietary preference.</div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/המבורגר.jpg`} alt="" className="burger-image"></img>
                      <div className="burger-info">
                            <div className="burger-title"> BURGER</div>
                            <div className="burger-description">From classic burgers to gourmet creations, burgers are versatile American staples enjoyed worldwide. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                    <img src ={`${process.env.PUBLIC_URL}/images/בשרים1.jpg`} alt="" className="burger-image"></img>
                        <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">A triple pattied burger for those who are always hungry. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div> 

                <div className="slide">
                    <div className="img-container">
                    <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">A triple pattied burger for those who are always hungry. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="img-container">
                       <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">A triple pattied burger for those who are always hungry. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div> 

                <div className="slide">
                    <div className="img-container">
                   <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">A triple pattied burger for those who are always hungry. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div> 

                <div className="slide">
                    <div className="img-container">
                    <div className="burger-info">
                            <div className="burger-title">MEET</div>
                            <div className="burger-description">A triple pattied burger for those who are always hungry. </div>
                            <button onClick={()=>AllRecipe()} className="add-to-cart">MORE RECIPES</button>
                        </div>
                    </div>
                </div> 

            </div>
           
        </div>
    </div>

        

</body>
    </>
}
