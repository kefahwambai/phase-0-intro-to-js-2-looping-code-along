// Code your solutions in this file
const gifts = ["PS5", "Car", "iphone"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(){
    const names = ["Ian", "Jordan", "Keith"]
    eventName = "birthday"
    
    for(i=0; i<names.length; i++){
        newArray =[`Thank you, ${names[i]} for the wonderful ${eventName} gifts!`] 

        console.log(newArray);
        
    }
    return newArray;
}
writeCards();

function countDown(){
    let count =10;
    while (count>=0){
        console.log(count);
        count--;
    }
}
countDown();
