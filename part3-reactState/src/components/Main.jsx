export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    
        /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

    ingredients.push(newIngrediant); // newIngrediant is out of scope need state to store it and update the state when new ingredient is added.


    const ingredientList = ingredients.map((item) => {
        return <li key={item}>{item}</li>

    });



    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */
    function handleSubmit(event) {
        event.preventDefault() // this will stop the default behavior of browser i.e reloading 
        // alert("Form submitted!")


        /**
         * <form onSubmit={handleSubmit}>
            <input name="ingredient" />
            </form>
            
            1. event.currentTarget = the <form> itself.
            target = what triggered it (the button), currentTarget = what the listener is attached to (the form). For forms you always want currentTarget.
            2. new FormData(event.currentTarget) = browser packages all inputs in that form into a key-value object using their name:
            { "ingredient": "what user typed" }
            3. .get("ingredient") = read value for key "ingredient" - must match name="ingredient" exactly. That's why you use name, not id or placeholder.
            So those 2 lines just mean: "grab what user typed in the ingredient box".

         * */
        const formData = new FormData(event.currentTarget);
        const newIngrediant = formData.get("ingredient");
        // console.log(newIngrediant);
        ingredients.push(newIngrediant); // yet pushed to array but the map and updating runs before pushing so again bug 
        // console.log(ingredients);

    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="add ingredient"
                    name="ingredient"
                />
                <button>add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}