const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

const recipebox = document.getElementById("recipebox");
const loading = document.getElementById("loading");
const recipeName = document.getElementById("recipeName");
const image = document.getElementById("image");
const Ingredients = document.getElementById("Ingredients");
const Instructions = document.getElementById("Instructions");

async function Recipe() {
        loading.classList.remove("hidden");
     recipebox.classList.add("hidden");

     try{
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    loading.classList.add("hidden");
    return data.recipes;
     }
     catch(error){
        loading.innerText = "loading Failed to load recipes.";
        console.error("Error fetching recipes:", error);
     }
}
function displayRecipe(recipe) {
    if (!recipe){
        loading.innerText = "Recipe data is unavailable.";
        loading.classList.remove("hidden");
        return;
    }
    loading.classList.add("hidden");
    recipebox.classList.remove("hidden");

    recipeName.innerText = recipe.name;
    image.src = recipe.image;
    Ingredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    Instructions.innerText = recipe.instructions;
}
btn1.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[4]);
});
btn2.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[5]);
});
btn3.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[6]);
}
);
btn4.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[7]);
});
btn5.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[8]);
});
btn6.addEventListener("click", async () => {
    const recipes = await Recipe();
    displayRecipe(recipes[9]);
});