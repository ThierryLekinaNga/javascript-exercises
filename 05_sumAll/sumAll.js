const sumAll = function(integerOne, integerTwo) {

    if(integerOne < 0 || integerTwo < 0)
        return 'ERROR';
                
    else if(typeof integerOne == "string" || typeof integerTwo == "string")
        return 'ERROR';
                
    else if(isNaN(integerOne) || isNaN(integerTwo))
        return 'ERROR';

    else if(integerOne < integerTwo) {
                    
        let sum = 0;
                
        let i = integerOne;
                    
        while(i <= integerTwo) {
                        
            sum += i;
                        
            i++;
        }
        return sum;
    }
                
    else if(integerOne > integerTwo) {
                    
        let sum = 0;
                    
        let j = integerTwo;
                    
        while(j <= integerOne) {
                        
            sum += j;
                        
            j++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
