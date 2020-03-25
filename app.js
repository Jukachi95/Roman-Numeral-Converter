function convertToRoman(num) {

    // First create an object that will be looped through later
    // This will be a key:value pair for the Roman Numeral and its value
    
     let romNum = {
    
         M: 1000,
         CM: 900,
         D: 500,
         CD: 400,
         C:100,
         XC: 90,
         L: 50,
         XL: 40,
         X: 10,
         IX: 9,
         V: 5,
         IV: 4,
         I: 1
    
     }
    
    // Declare an empty string that will take the key
    
     let roman = ''
    
    //  Use a for-in loop to loop through the key value pairs
    
        for(let key in romNum){
    
            // While the num is greater or equal to the one of the 
            // loopable values e.g. 1,4 or 5...
            // 7 is greater than 5, so it will append the key 'V' to the string Roman
                while(num >= romNum[key]){
    
                    // Append it to the roman string
                    roman += key;
                    // Then take the correspnding value, in this case,5, away 
                    // from num, which is 7
                    // Num will now be 2.
                    // So the next time the loop is run
                    // It will append I to the roman string on its 1st iteration
                    // and then I again on its second iteration
                    // Resulting in II
                    // Leaving a final value for roman as VII
                    // Which is the Roman Numeral for 7
                    num-=romNum[key]
                }
    
        }
    
        return roman;
    
    
    }
    
    convertToRoman(7);
    