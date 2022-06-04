import Shipfactory from "./Shipfactory"
function Gameboardfactory(){

    return {
        ships: [],

        missedatacks: [],

        placeShips(size, x, y, rotation){
            this.ships.push(Shipfactory(size,x,y,rotation));
        },
        receiveAttack(x,y){
            let someshiphits = false;
            ships.forEach(ship => {
                if(ship.rotationed == false)
                {
                    if(ship.x <= x && (ship.x + ship.lenght) >= x)
                    {
                        if(ship.y == y)
                        {
                            ship.hit(x - ship.x);
                            someshiphits = true;
                        }
                    }
                }
                if(ship.rotationed == true)
                {
                    if(ship.y <= y && (ship.y + ship.lenght) >= y)
                    {
                        if(ship.x == x)
                        {
                            ship.hit(y - ship.y);
                            someshiphits = true;
                        }
                    }
                }
            });
            if(someshiphits == false)
            {
            this.missedatacks.push({x: x, y:y});
            }
        },
        isShipsSunk(){

        }

    }
}

export default Gameboardfactory;

/*Create Gameboard factory.
Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.

Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/
