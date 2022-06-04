import Gameboardfactory from "../Gameboardfactory.js";
import Shipfactory from "../Shipfactory.js";

let gamefactory = Gameboardfactory();
gamefactory.placeShips(3,1,1,false);

test('Test place shoips', () => {
    expect(gamefactory.ships[0]).toEqual(Shipfactory(3,1,1,false));
})