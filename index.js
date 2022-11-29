let name=["Oliver", "Lewis", "Kamau"]
function writeCards(name , message) {
    let messages=[]
    for(let j=0;j<name.length;j++){
        messages.push(`Thank you, ${name[j]}, for the wonderful surprise gift!`)
    }
    return messages
}
function countDown(j){
    for(let n=j;n>=0;n--){
    console.log(n)    
    }
}