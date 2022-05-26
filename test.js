const minnum = document.querySelector('.minnumber');
      maxnum = document.querySelector('.maxnumber');
      input = document.getElementById('guess');
      getbtn = document.getElementById('btn');
      msg1 = document.getElementById('message1');
      msg2 = document.getElementById('message2');
      getgame = document.getElementById('game');
      getimg = document.getElementById('imgg');

 let min = 0;
     max = 10;
     gameleft = 3;
     winningnum = randomnum(min,max);  

   minnum.textContent = min;
   maxnum.textContent= max

   getbtn.addEventListener('click',function(){
           // console.log('i am working ')
           //console.log(input.value);

           let guess = Number(input.value);


           if(guess < min || guess > max || isNaN(guess)){
           	//console.log('hey your wrong')

           	msg2.textContent = `"Hey your out of line,Please enter a number from ${min} to ${max}"`;
           	msg2.style.color = 'red'
           	getimg.src = 'sss.png';

                 setTimeout(function(){
               message2.textContent ='';
              },2000);


           }


           if(guess===winningnum){

           	input.disabled = true;
           	input.style.borderColor = 'green';
           	input.style.color ='green'
           	getimg.src='tr.png';
           	getbtn.textContent = 'Play Again?'
           	getbtn.classList.add('haha');
           	msg1.textContent = `Your are not Bad.....The Correct Number is ${winningnum}...Keep Going`;
           	msg1.style.color = 'green'

           }else{
           	gameleft -= 1;

           	if(gameleft===0){

           		input.disabled = true;
           		input.style.borderColor ="red";
           		input.style.color ='red';
           		getimg.src = 'gob.png';
           		getbtn.textContent ='Play Again?'
           		getbtn.classList.add('haha');
           		msg1.textContent = `Lolll You stupid.My grandma even know that ${winningnum} is Correct!`;
           		msg1.style.color = 'red'
           	}else{

           		input.value = '';
           		msg1.textContent=`Hey Bitch!! "${guess}" is not correct,Fuck the guess again bitch...`;
           		msg1.style.color = 'red';
           	}



           }

   });

   
           getgame.addEventListener('mouseup',(e)=>{
           	//console.log(e.target)

                if(e.target.className === 'btn haha'){
                        //console.log('i am super happy')
                        window.location.reload();
                }
           });

            function randomnum(minum,maxnum){
                                     // 10  - 1   +1 //+1 is because of not to be zero
        let getrdm = Math.floor(Math.random() * (maxnum-minum+1));

        return getrdm;
        
    }


       



