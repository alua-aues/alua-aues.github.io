var numner_one;
        var numner_two;
        var symb;
		

		
    function calc(number, subm) {

        if(numner_one == undefined ){
            numner_one = number
            document.getElementById('calculator').value += number
            document.getElementById('error').textContent = undefined
        } 

        else if(symb == undefined && numner_one != undefined){
            document.getElementById('error').textContent = 'Error'
        }


        
        else if(numner_two == undefined){
            numner_two = number
            document.getElementById('calculator').value += number

            if(symb == '+'){
                 
                document.getElementById('res').textContent = Number(numner_one) + Number(numner_two)
                document.getElementById('error').textContent = undefined
            }
            else if(symb == '-'){
               
                document.getElementById('res').textContent = Number(numner_one) - Number(numner_two)
                document.getElementById('error').textContent = undefined
            }
        }
        else if(numner_one !=undefined && symb != undefined && numner_two != undefined){
            numner_one = number
            symb = undefined
            numner_two = undefined
            document.getElementById('calculator').value = number
            document.getElementById('error').textContent = undefined
      
        }

        else if(symb == undefined && numner_one == undefined){
            document.getElementById('error').textContent = 'Error'
        }
        else {
            document.getElementById('error').textContent = 'Error'
        }


      
    
    }
    function sumb(sym){
        if(symb == undefined && numner_one != undefined)
        {
            symb = sym
            document.getElementById('calculator').value += sym
            document.getElementById('error').textContent = undefined
        }
        else{
            document.getElementById('error').textContent = 'Error'
        }
    }

