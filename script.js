const searchInput = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")
const container = document.getElementById("body")


const handleClick = async ()=>{
    try {
        const api = await fetch(`https://api.jikan.moe/v4/anime?q=${searchInput.value}&sfw`)
        const res = await api.json()
        const datas = res.data;

        
        console.log(datas)

        let card = ''
        datas.forEach(e=>{
           card += `
           <div class="box">
              <img src=${e.images.webp.large_image_url}></img>
           </div> 
           `
        })

        container.innerHTML = card;

    } catch(err){
        console.log(err)
    }
}

searchBtn.addEventListener("click", handleClick)