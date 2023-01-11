var imgs = document.querySelectorAll('.img');
imgs.forEach(img=>{
   
    img.onclick=()=>{
        for(let i = 0 ;i<=imgs?.length;i++){
            imgs[i]?.classList.remove('active')
        }
        if(img.classList.contains('active')){
            img.classList.remove('active')
        }else{
            img.classList.add('active')

        }
       
    }
})
