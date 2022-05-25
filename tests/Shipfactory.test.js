import Shipfactory from "../Shipfactory.js";

const Ship = Shipfactory(3,5,2);

test('Ship factory lenght', () => {
    expect(Ship.length).toBe(3);
});

test('Ship array', () => {
    expect(Ship.placeshit).toEqual([false, false, false]);
})

test('Ship cordinates', () => {
    expect(Ship.x).toBe(5);
    expect(Ship.y).toBe(2);
})

const Ship2 = Shipfactory(3,2,2);

Ship2.hit(0);
Ship2.hit(1);
Ship2.hit(2);

test('Testing isSunk function', () => {
    expect(Ship2.isSunk()).toBe(true);
})

/*
function Shipfactory(size){
    function makearray(){
        let array;
        for(i = 0; i < size; i++)
        {
         array[i] == false;
        }
        return array;
    }
     return {
         length: size,
         placeshit: makearray(),
         destoied: false,
         hit(nb){
             this.placeshit[nb] = true;
         },
         isSunk(){
             let i = 0;
             while (i < this.length)
             {
                 if(this.placeshit[i] == false)
                 {
                     return false;
                 }
                 i++;
             }
             this.destoied = true; 
             return (true);
         }
     }
 }
 */