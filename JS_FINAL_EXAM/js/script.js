(function () {
  let recipes = [];
  let editId = null;

  function init() {
    const form = document.getElementById("recipe-form");
    const recipesList = document.getElementById("recipes-list");
    const emptyState = document.getElementById("empty-state");

    const titleEl = document.getElementById("title");
    const ingredientsEl = document.getElementById("ingredients");
    const instructionsEl = document.getElementById("instructions");
    const cuisineEl = document.getElementById("cuisine");

    const submitBtn = document.getElementById("submit-btn");
    const resetBtn = document.getElementById("reset-btn");
    const clearBtn = document.getElementById("clear-btn");

    const search = document.getElementById("search");
    const filterCuisine = document.getElementById("filter-cuisine");

    if (!form) {
      console.error("FORM NOT FOUND");
      return;
    }

    // FORM SUBMIT
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = titleEl.value.trim();
      const ingredients = ingredientsEl.value.trim();
      const instructions = instructionsEl.value.trim();
      const cuisine = cuisineEl.value.trim();

      if (!title || !ingredients) {
        alert("Title and Ingredients required");
        return;
      }

      const recipeData = {
        id: editId || Date.now(),
        title,
        ingredients,
        instructions,
        cuisine,
      };

      if (editId) {
        recipes = recipes.map((r) => (r.id === editId ? recipeData : r));
        editId = null;
        submitBtn.textContent = "Add Recipe";
      } else {
        recipes.push(recipeData);
      }

      saveRecipes();
      displayRecipes();
      form.reset();
    });

    resetBtn.addEventListener("click", () => {
      editId = null;
      submitBtn.textContent = "Add Recipe";
      form.reset();
    });

    search.addEventListener("input", applyFilters);
    filterCuisine.addEventListener("change", applyFilters);

    clearBtn.addEventListener("click", () => {
      search.value = "";
      filterCuisine.value = "";
      displayRecipes();
    });

    loadRecipes();

    // ===== load recipe function =====
    function loadRecipes() {
      recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
      displayRecipes();
    }

    function saveRecipes() {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    function displayRecipes(filtered = null) {
      const data = filtered || recipes;
      recipesList.innerHTML = "";

      if (data.length === 0) {
        emptyState.classList.remove("hidden");
        return;
      }

      emptyState.classList.add("hidden");
      data.forEach((r) => {
        const card = document.createElement("div");
        card.className =
          "bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-indigo-100";

        let stepsHTML = "";
        if (r.instructions) {
          const steps = r.instructions.split("\n"); 
          stepsHTML =
            "<ol class='list-decimal list-inside text-indigo-700 text-sm space-y-2 mt-2'>";
          steps.forEach((s) => {
            if (s.trim() !== "") {
              stepsHTML += `<li class="border-b border-indigo-200 pb-1">${s.trim()}</li>`;
            }
          });
          stepsHTML += "</ol>";
        }
        // print card
        card.innerHTML = `
    <div class="p-5 flex border border-indigo-600 flex-col gap-3">

      <h3 class="text-2xl font-bold text-indigo-800 border-b pb-2 border-indigo-400">${
        r.title
      }</h3>

      <p class="text-sm text-indigo-700 line-clamp-3 border-b pb-2 border-indigo-400">${
        r.ingredients
      }</p>

      ${stepsHTML}

      <div class="flex justify-between items-center mt-3">

        <span class="px-3 py-1 rounded-full bg-indigo-200 text-indigo-900 text-xs font-medium">
          ${r.cuisine || "Other"}
        </span>

        <div class="flex gap-2">
          <button class="edit-btn px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition cursor-pointer"
            data-id="${r.id}">
            Edit
          </button>
          <button class="delete-btn px-4 py-1.5 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 transition cursor-pointer"
            data-id="${r.id}">
            Delete
          </button>
        </div>

      </div>
    </div>
  `;

        recipesList.appendChild(card);
      });

      // edit listener
      document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", (e) =>
          editRecipe(Number(e.target.dataset.id))
        );
      });

      // delete listener
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) =>
          deleteRecipe(Number(e.target.dataset.id))
        );
      });
    }

    function deleteRecipe(id) {
      if (!confirm("Delete this recipe?")) return;
      recipes = recipes.filter((r) => r.id !== id);
      saveRecipes();
      displayRecipes();
    }

    function editRecipe(id) {
      const r = recipes.find((x) => x.id === id);
      if (!r) return;

      titleEl.value = r.title;
      ingredientsEl.value = r.ingredients;
      instructionsEl.value = r.instructions;
      cuisineEl.value = r.cuisine;

      editId = id;
      submitBtn.textContent = "Update Recipe";
    }

    function applyFilters() {
      const q = search.value.toLowerCase();
      const fc = filterCuisine.value;

      const filtered = recipes.filter(
        (r) =>
          (r.title.toLowerCase().includes(q) ||
            r.ingredients.toLowerCase().includes(q)) &&
          (!fc || r.cuisine === fc)
      );

      displayRecipes(filtered);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
