// https://www.omdbapi.com/?i=tt3896198&apikey=5c9acbfd&s=${moviename}'

var timer
async function main (){
    var search = document.getElementById("search").value
    console.log(search)
    var data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5c9acbfd&s=${search}`)
    console.log(data)
}


function handle(main,delay){
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(()=>{
        main()
    },delay)

}