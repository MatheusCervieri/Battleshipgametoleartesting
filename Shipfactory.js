function Shipfactory(size, x , y, rotation){
   function makearray(){
       let array = [];
       for(let i = 0; i < size; i++)
       {
        array[i] = false;
       }
       return array;
   }
    return {
        x: x,
        y: y,
        rotationed: rotation,
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
            return (true);
        }
    }
}

export default Shipfactory;