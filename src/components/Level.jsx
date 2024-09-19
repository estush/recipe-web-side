import { useEffect, useState } from "react";
import { getLevel, addLevel } from "./js/api";
import "../css/Level.css"; // ייבוא קובץ CSS

export const Level = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getLevel()
            .then(x => {
                setList(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []); // הוספת [] כדי להפעיל את useEffect פעם אחת בלבד

    // הוספת רמה
    const send = async (event) => {
        event.preventDefault();
        addLevel({ name: event.target[0].value })
            .then(x => {
                setList(prevList => [...prevList, x.data]); // הוספת רמה לרשימה
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div className="level-container">
            <h1>רמות</h1>
            <div className="level-list">
                {list && list.map(g => (
                    <h3 key={g.id} className="level-item">{g.name}</h3>
                ))}
            </div>
            <form onSubmit={send} className="add-level-form">
                <label htmlFor={'le'}>רמה:</label>
                <br />
                <input type={'text'} id={'le'} placeholder="הזן רמה" required />
                <input type="submit" value={'הוסף'} className="submit-button" />
            </form>
        </div>
    );
};
