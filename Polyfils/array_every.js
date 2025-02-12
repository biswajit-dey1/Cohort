if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(userfn){
     
        for(let i = 0 ; i < this.length ; i++){
            if(!userfn(this[i], i)){
                return false
            }
        }

        return true

        
    }
}

const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1.myEvery( function(value){

    return value < 40

}
 )
 );