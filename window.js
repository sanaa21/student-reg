var userName = prompt('What is your name ?');
var pic2 = prompt( 'which pic ?' , 'school , student');
var pic = prompt('How many school pic , student pic do u like to see ?');
var pic2 = prompt( 'which pic ?' , 'school , student');
//while(pic2!=='school'&& pic2!=='student'){
   // pic=ptompt('plz enter on of them student or school..pic');
//}
  for (var i = 1 ; i <=pic; i++ ){

if(pic === 'school'){
    document.write('<img src= " https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-360x180.jpg"/>') 
}else if (pic=== 'student'){
    document.write('<img src= "https://m.economictimes.com/thumb/msid-77391367,width-1200,height-900,resizemode-4,imgsize-677864/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg "  width="100" height="100"/>')
}
    

else { alert('Welcome to our Acadimy')
}
    
  }
