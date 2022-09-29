
document.querySelector("button").addEventListener("click", recipeSearch)
document.querySelector(".contact--btn").addEventListener("click", contactPage)
document.querySelector(".contact").style.display = "none"

function recipeSearch(e) {
    e.preventDefault()
    const searchQuery = document.querySelector("#recipe--search").value
    const results = document.querySelector("#search--results")
    if (searchQuery === "") {
        alert("Please enter a search query")
        return
    } else {
    results.innerHTML = ""
    document.querySelector(".aside--results").style.display = "block"
    document.querySelector(".main--result").style.display = "none"
    document.querySelector(".main--choose").style.display = "block"
    document.querySelector(".main--intro").style.display = "none"
    document.querySelector(".contact").style.display = "none"

    let keyA = "945b101c2f57f76"
    let keyB = "0385e206959178d06"
    let app_id = "c18577c3"

    fetch(`https://api.edamam.com/api/recipes/v2?app_key=${keyA}${keyB}&app_id=${app_id}&type=public&q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)  
            for (let i = 0; i < data.hits.length; i++) {                 
                results.innerHTML += 
                `<div class="search--results--result" id="result${i}">
                    <img src=${data.hits[i].recipe.image}>
                    <div class="search--results--result--details">
                        <p class="recipe--title">${data.hits[i].recipe.label}</p>
                    </div>
                </div>`
            }
            document.getElementById(`result0`).addEventListener("click", showResult1)
            document.getElementById(`result1`).addEventListener("click", showResult2)
            document.getElementById(`result2`).addEventListener("click", showResult3)
            document.getElementById(`result3`).addEventListener("click", showResult4)
            document.getElementById(`result4`).addEventListener("click", showResult5)
            document.getElementById(`result5`).addEventListener("click", showResult6)
            document.getElementById(`result6`).addEventListener("click", showResult7)
            document.getElementById(`result7`).addEventListener("click", showResult8)
            document.getElementById(`result8`).addEventListener("click", showResult9)
            document.getElementById(`result9`).addEventListener("click", showResult10)
            document.getElementById(`result10`).addEventListener("click", showResult11)
            document.getElementById(`result11`).addEventListener("click", showResult12)
            document.getElementById(`result12`).addEventListener("click", showResult13)
            document.getElementById(`result13`).addEventListener("click", showResult14)
            document.getElementById(`result14`).addEventListener("click", showResult15)
            document.getElementById(`result15`).addEventListener("click", showResult16)
            document.getElementById(`result16`).addEventListener("click", showResult17)
            document.getElementById(`result17`).addEventListener("click", showResult18)
            document.getElementById(`result18`).addEventListener("click", showResult19)
            document.getElementById(`result19`).addEventListener("click", showResult20)
            let ingredientUl = document.querySelector("#ingredient--list")
            function showResult1() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[0].recipe.image
                document.querySelector("#main--title").innerText = data.hits[0].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[0].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[0].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[0].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult2() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[1].recipe.image
                document.querySelector("#main--title").innerText = data.hits[1].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[1].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[1].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[1].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[1].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult3() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[2].recipe.image
                document.querySelector("#main--title").innerText = data.hits[2].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[2].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[2].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[2].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[2].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult4() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[3].recipe.image
                document.querySelector("#main--title").innerText = data.hits[3].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[3].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[3].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[3].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[3].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult5() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[4].recipe.image
                document.querySelector("#main--title").innerText = data.hits[4].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[4].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[4].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[4].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[4].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult6() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[5].recipe.image
                document.querySelector("#main--title").innerText = data.hits[5].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[5].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[5].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[5].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[5].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult7() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[6].recipe.image
                document.querySelector("#main--title").innerText = data.hits[6].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[6].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[6].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[6].recipe.ingredientLines.length; i++) {
                ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[6].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult8() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[7].recipe.image
                document.querySelector("#main--title").innerText = data.hits[7].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[7].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[7].recipe.source}</a>`
                    ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[7].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[7].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult9() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[8].recipe.image
                document.querySelector("#main--title").innerText = data.hits[8].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[8].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[8].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[8].recipe.ingredientLines.length; i++) {    
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[8].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult10() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[9].recipe.image
                document.querySelector("#main--title").innerText = data.hits[9].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[9].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[9].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[9].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[9].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult11() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[10].recipe.image
                document.querySelector("#main--title").innerText = data.hits[10].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[10].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[10].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[10].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[10].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult12() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[11].recipe.image
                document.querySelector("#main--title").innerText = data.hits[11].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[11].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[11].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[11].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[11].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult13() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[12].recipe.image
                document.querySelector("#main--title").innerText = data.hits[12].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[12].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[12].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[12].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[12].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult14() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[13].recipe.image
                document.querySelector("#main--title").innerText = data.hits[13].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[13].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[13].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[13].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[13].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult15() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[14].recipe.image
                document.querySelector("#main--title").innerText = data.hits[14].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[14].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[14].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[14].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[14].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult16() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[15].recipe.image
                document.querySelector("#main--title").innerText = data.hits[15].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[15].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[15].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[15].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[15].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult17() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[16].recipe.image
                document.querySelector("#main--title").innerText = data.hits[16].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[16].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[16].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[16].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[16].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult18() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[17].recipe.image
                document.querySelector("#main--title").innerText = data.hits[17].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[17].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[17].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[17].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[17].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult19() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[18].recipe.image
                document.querySelector("#main--title").innerText = data.hits[18].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[18].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[18].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[18].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[18].recipe.ingredientLines[i]}</li>`
                }
            }
            function showResult20() {
                document.querySelector(".main--choose").style.display = "none"
                document.querySelector(".main--result").style.display = "block"
                document.querySelector("#recipe--image--main").src = data.hits[19].recipe.image
                document.querySelector("#main--title").innerText = data.hits[19].recipe.label
                document.querySelector(".btn--source").innerHTML = `<a href="${data.hits[19].recipe.url}" id="source--link" class="btn--source" target="_blank">${data.hits[19].recipe.source}</a>`
                ingredientUl.innerHTML = ""
                for (let i = 0; i < data.hits[19].recipe.ingredientLines.length; i++) {
                    ingredientUl.innerHTML += 
                `<li class="ingredient--list--item">${data.hits[19].recipe.ingredientLines[i]}</li>`
                }
            }
        })
    .catch(err => console.error(err))
    }
}

function contactPage() {
    document.querySelector(".aside--results").style.display = "none"
    document.querySelector(".main--result").style.display = "none"
    document.querySelector(".main--choose").style.display = "none"
    document.querySelector(".main--intro").style.display = "none"
    document.querySelector(".contact").style.display = "block"
}

