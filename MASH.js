function mash(){
    return "You will live in a " + getHome() + " and will have " + getChildrenCount() + " children and will drive a " + getCar() + "! But you also have chronic " + healthComplications() + " and... " + relationships() + "!";
} 
console.log(mash());
function getHome(){
    const types = ["Mansion", "Apartment", "Shack", "House", "a ditch"];
    if(process.argv[2] != undefined){
        types.push(process.argv[2]);
    }
    const living = Math.floor(Math.random() * types.length);
    return types[living];
}
function getChildrenCount(){
    const rand = Math.floor(Math.random() * 100);    
    return (Math.random() < .5 && process.argv[3] != undefined) ? process.argv[3] : rand;
}
function getCar(){
    const cars = ["Lambo", "Toy car", "Ferrari", "box"];
    if(process.argv[4] != undefined){
        cars.push(process.argv[4]);
    }
    const rand = Math.floor(Math.random() * cars.length);
    return cars[rand];
}
function healthComplications(){
    const complications = ["Diabetes", "Hypertension", "Aneurysm", "Strokes"]
    const rand = Math.floor(Math.random() * complications.length);
    return complications[rand];
}
function relationships(){
    const relationships = ["you have a Happy Marriage", "you get a Divorce", " your Children hate you and move away", "You live happily with a rich comfortable family"];
    const rand = Math.floor(Math.random() * relationships.length);
    return relationships[rand];
}