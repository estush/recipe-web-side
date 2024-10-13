import { useEffect, useState } from "react";
import { getCategory, addCategory } from "./js/api";
import { useSelector } from "react-redux";
import "../css/Category.css"; 


export const Category = () => {
    const user = useSelector(x => x.currentUser);
    const [list, setList] = useState([]);

    useEffect(() => {
        getCategory()
            .then(x => {
                setList(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);
    
    const send = (event) => {
        event.preventDefault();
        addCategory({ name: event.target[0].value })
            .then(x => {
                setList(prevList => [...prevList, x.data]); //add new category
             })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div className="category-container">
            <div className="category-list">
                {list && list.map(c => (
                    <div key={c.id} className="category-card">
                        <h3>{c.name}</h3>
                    </div>
                ))}
            </div>
            <form className="add-category-form" onSubmit={send}>
                <label htmlFor='ca'>categories:</label>
                <input type='text' id='ca' placeholder="add category " />
                <input type="submit" value='add' />
            </form>
        </div>
    );
};
