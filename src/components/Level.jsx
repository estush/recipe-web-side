import { useEffect, useState } from "react";
import { getLevel, addLevel } from "./js/api";
import "../css/Level.css"; 
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
    }, []); 
    const send = async (event) => {
        event.preventDefault();
        addLevel({ name: event.target[0].value })
            .then(x => {
                setList(prevList => [...prevList, x.data]);
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
                <label htmlFor={'le'}>level:</label>
                <br />
                <input type={'text'} id={'le'} placeholder="add level " required />
                <input type="submit" value={'add'} className="submit-button" />
            </form>
        </div>
    );
};
