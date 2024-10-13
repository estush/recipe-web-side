import { useNavigate } from 'react-router';
import '../css/home.css';

const Slide = ({ image, title, description, onMoreRecipes }) => (
    <div className="slide">
        <div className="img-container">
            <img src={image} alt={title} className="burger-image" />
            <div className="burger-info">
                <div className="burger-title">{title}</div>
                <div className="burger-description">{description}</div>
                <button onClick={onMoreRecipes} className="add-to-cart">MORE RECIPES</button>
            </div>
        </div>
    </div>
);

export const Home1 = () => {
    const nav = useNavigate();
    
    const slidesData = [
        {
            image: `${process.env.PUBLIC_URL}/images/עוף.jpg`,
            title: "CHICKENS",
            description: "Numerous ways that you can cook chicken, from classic roast chicken to spicy chicken curry."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/בשרים.jpg`,
            title: "MEAT",
            description: "Savory and hearty, meat dishes offer a wide range of flavors and textures."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/תמונת דף הבית.jpg`,
            title: "GRANOLA",
            description: "Crunchy and nutritious mix of oats, nuts, seeds, and sweeteners, perfect for breakfast or snacks."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/גבינה.jpg`,
            title: "CHEESECAKES",
            description: "Creamy and indulgent, cheesecake is a decadent dessert loved by many."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/עוגיות.jpg`,
            title: "COOKIES",
            description: "Crisp or chewy, cookies are a delightful treat enjoyed by all ages."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/שוקולד.jpg`,
            title: "CHOCOLATE CAKE",
            description: "Rich and decadent, chocolate cake is a beloved dessert."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/סלט.jpg`,
            title: "SALADS",
            description: "Refreshing and versatile, salads offer a combination of crisp vegetables, fruits, and proteins."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/עוגה.jpg`,
            title: "CAKES",
            description: "There's a cake for every taste and celebration."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/מרק1.jpg`,
            title: "SOUPS",
            description: "Soups offer endless variations to suit any palate."
        },
        {
            image: `${process.env.PUBLIC_URL}/images/המבורגר.jpg`,
            title: "BURGER",
            description: "From classic burgers to gourmet creations, burgers are versatile American staples."
        },
    ];

    const handleMoreRecipes = () => {
        nav(`/AllRecipe`);
    };

    return (
        <div className="container">
            <h2 className="title">FlavorFam - A Culinary Odyssey</h2>
            <p className="description">
                Step into a realm where the aroma of spices dances in the air and the sizzle of ingredients tantalizes the senses...
            </p>
            <div className="burger-slider">
                <div className="slider-wrapper">
                    {slidesData.map((slide, index) => (
                        <Slide 
                            key={index} 
                            image={slide.image} 
                            title={slide.title} 
                            description={slide.description} 
                            onMoreRecipes={handleMoreRecipes} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
