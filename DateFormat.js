const formatDate=()=>{
let date = new Date().toString().split(" ")
return `${date[3]} ${date[1]} ${date[2]} ${date[4]}`
}

module.exports = formatDate

//console.log(formatDate())