$$ = document ;
headerNav = $$.querySelector('.header');
action = $$.querySelector('.action');
icon = $$.querySelectorAll('.header .nav li i');
navLi = $$.querySelectorAll('.nav li');
navP = $$.querySelectorAll('.nav p');
infor = $$.querySelector('.icon-infor');
pageContent = $$.querySelectorAll('.page-content');
listContent = $$.querySelectorAll('.list-content li')
headerNav.addEventListener('mouseover',function (event) {
   navLi.forEach((e,index) =>{ 
      text = e.querySelector('p');
      if(text!=null) text.classList.remove('none');
      e.addEventListener('click',(event) =>{
         console.log('index :>> ', index);
         pageContent.forEach(function(e,page){
            if(page+1==index){
               e.classList.remove('none');
            } else{
               e.classList.add('none');
            }
         })
         event.stopImmediatePropagation();
      })
   })
   icon.forEach(e =>{
      e.style['padding-right'] = '0em';
   })
   infor.classList.remove('none');
})

headerNav.addEventListener('mouseout',function(){
   navP.forEach((e) => {
      e.classList.add('none');
   });
   icon.forEach(e =>{
      e.style['padding-right'] = '8em';
   })
   infor.classList.add('none');
})


action.addEventListener('click',e =>{
   if(action.classList.contains('fa-moon')){
      action.classList.remove('fa-moon');
      action.classList.add('fa-sun');
   } else {
      action.classList.add('fa-moon');
      action.classList.remove('fa-sun');
   }
   
})

