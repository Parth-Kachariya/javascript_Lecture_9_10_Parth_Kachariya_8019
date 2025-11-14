      let Input = document.getElementById("Input")
      let getData = document.getElementById("getresult")
      let result = document.getElementById("result")
      let error = document.getElementById("error")

      getData.addEventListener('click' , CoronaData)

      async function CoronaData() {
        const country = Input.value.trim()

        error.textContent = ""

        if(!country){
          alert("Please Enter Country Name") 
          return
        }

        let API = `https://disease.sh/v3/covid-19/countries/${country}`

        try{
          const response = await fetch(API)
          if(!response.ok) throw new Error("Country Not Found!!")
          const data = await response.json()
            result.classList.remove("hidden")


          console.log(data);
          
          result.innerHTML = `
            <div class="bg-white block  p-6 border border-default rounded-lg shadow-xs">
            <h2 class="text-center mb-3 font-bold text-2xl">COVID-19 Report</h2>
            <img class="rounded-lg w-50 mx-auto" src="${data.countryInfo.flag}" alt="" />
            <h4 class="mt-4 mb-2 text-2xl font-bold tracking-tight text-2xl text-center"> ${data.country}</h4>
           
            <div class="mt-4 grid grid-cols-1 gap-3">

          <div class="p-6 border-3 bg-yellow-600 rounded-lg">
            <strong class="text-white">Cases</strong>
            <p class="text-xl text-white font-bold">${data.cases}</p>
          </div>

          <div class="p-6 border-3 bg-red-800 rounded-lg">
            <strong class="text-white">Deaths</strong>
            <p class="text-xl text-white font-bold">${data.deaths}</p>
          </div>

          <div class="p-6 border-3 bg-green-800 rounded-lg">
            <strong class="text-white">Recovered</strong>
            <p class="text-xl text-white font-bold">${data.recovered}</p>
          </div>

          <div class="p-6 border-3 bg-blue-800 rounded-lg">
            <strong class="text-white">Active</strong>
            <p class="text-xl text-white font-bold">${data.active}</p>
          </div>

        </div>
            
            </div>
            `
        }
        catch(err){
          console.log(err);
        }
      }



    