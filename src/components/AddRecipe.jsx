import { useSelector } from "react-redux";
import { addRecipe,getLevel,getCategory,getIngrediant, getAllRecipe } from "./api";
import { Outlet, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import '../css/add.css'
import { Nav } from "./Nav";

export const AddRecipe =()=>{

    const user= useSelector(u=>{return u.currentUser})
    const nav =useNavigate()

    const [CategoryList,setCategoryList]=useState()
    const [LevelList,setLevelList]=useState()
    const [IngredientList,setIngredientList]=useState()
    const[RecipeList,SetRecipeList]=useState()

    const [byLevel,setLevel]=useState()
    const [ byCategory,setCategory]=useState()
    // const [ byIngredient,setIngredient ]=useState()

    useEffect(() => {
        
        //list categorie
        getCategory()
            .then(x => {
                console.log(x.status);
                setCategoryList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getLevel()
        .then(x => {
            console.log(x.status);
            setLevelList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
        getIngrediant()
        .then(x => {
            console.log(x.status);
            setIngredientList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
        getLevel()
        .then(x => {
            console.log(x.status);
            setLevelList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
        getAllRecipe()
        .then(x => {
            console.log(x.status);
            SetRecipeList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
},[])

//add recipe
const add=(event)=>{
let cName,lName
{CategoryList && CategoryList.map(x =>
    {   
        if(x.id==byCategory)
        {
            cName=x.name
        }
           

    } )}  

    {LevelList&&LevelList.map(x=>{
        if(x.id==byLevel)
           lName=x.name
    })}

    const newRecipe={
        name:event.target[0].value,
        userId:user.id,
        userName:user.firstName,
        categoryId:byCategory,
        categoryName:cName,
        levelId:byLevel,
        levelName:lName,
        note:event.target[2].value,
        instructions:event.target[3].value,
    }
    
    event.preventDefault()  

    addRecipe(newRecipe)
    .then(x => {
        alert(`sucsess`)
        
    })
    .catch(err => {
        console.log(err.message);
    })

    // const setIngredient1=()=>{
    //     nav(`/AddIngredient`)
    // }



}

const addIng = () =>{

    nav(`/addIngrediant`)
}


return<>
{/* <div class="shade">
		<div class="blackboard">
				<div class="form"> */}
						{/* <p>
								<label>Name: </label>
								<input type="text" />
						</p>
						<p>
								<label>Email: </label>
								<input type="text" />
						</p>
						<p>
								<label>Phone: </label>
								<input type="tel" />
						</p>
						<p>
								<label>Subject: </label>
								<input type="text" />
						</p>
						<p>
								<label>Message: </label>
								<textarea></textarea>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p> */}

<h1>add recipe:</h1>
<form className="addRecipe" onSubmit={(e)=>add(e)}>

<input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>

   <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>

    <label htmlFor={'name'} >Name:</label><br></br>
    <input type="checkbox" id={'name'} placeholder={'input the name of the recipe'} ></input>
    <br></br>
    <label htmlFor={'preparation'} >preparation time:</label><br></br>
    <input placeholder="preparationTime"></input>
    <br></br>
    <label htmlFor={'categories'} >note:</label><br></br>
    <input placeholder="note"></input>
   
    <br></br>
    <input type="checkbox" placeholder="instruction"></input>
    {/* category */}
    <label htmlFor={'categories'} >categories:</label><br></br>
    <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="">
                <>בחר קטגוריה</>
            </option>
            {CategoryList && CategoryList.map(x =>
                <option value={x.id}>
                    {x.name}
            </option>
                    )}    
        </select>

    {/* level*/}
<    br></br>
    <label htmlFor={'levels'} >levels:</label><br></br>
    <select onChange={(e)=>setLevel(e.target.value)}>
        <option value=""> <>בחר רמה</></option>
            {LevelList && LevelList.map(x =>
            <option value={x.id}>
                    {x.name}
            </option>
            )}   
</select>

            {/* ingredient */}
            {IngredientList && IngredientList.map(x =>
            // <option
                    <div>
                        <label htmlfor={x.id}> {x.name} </label>
                        <input type="checkbox" id={'name'} name="aaa"></input>
                        <input type="text "placeholder="amount" id={x.id} ></input>
                    </div>
                 )}   
                 <br></br>
                 <br></br>
<button onClick={addIng}>add ingredient</button>

<br></br>
<input type={'submit'} className="wipeout" onClick={add} value="Send" ></input>
{/* </select> */}
 </form>
 <Outlet></Outlet>
 {/* </div>
		</div>
</div> */}

</>
}