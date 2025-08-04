// higher order array

// of loop
const arr = [1,2,3,4,5]

for( const num of arr){
    //console.log(num);
}

// maps

const map = new Map()

map.set('IN',"india")
map.set('USA',"united sates of america")

//console.log(map);


//loops of maps

for(const [key,value] of map){
    console.log(key,":-",value);
}