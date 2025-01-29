let index = 1;
let firstImg = 1;
let totalImg = 5;//update this with respect to the total imgs 
let count = 1;
let nav = [];
const navBtnContainer = document.getElementById('nav-dots-container')

function nextImg(){
    if (count < totalImg) {
        //iterate over the image and counting until totalImg is met
        const imgRemove = document.getElementById('img'+ index)
        imgRemove.classList.add('image-invisible')
        nav[index].classList.remove('bg-color');

        index++;
        const imgAdd = document.getElementById('img'+index);
        imgAdd.classList.remove('image-invisible');
        nav[index].classList.add('bg-color');

        count++
        console.log("index:"+ index + " count:"+count)
    }
    else{
        //resets the index and count when it hits the last img above
        const imgRemove = document.getElementById('img'+ index)
        imgRemove.classList.add('image-invisible')
        nav[index].classList.remove('bg-color');

        const imgAdd = document.getElementById('img'+firstImg);
        imgAdd.classList.remove('image-invisible');
        nav[firstImg].classList.add('bg-color');

        index = firstImg;
        count = firstImg;
        console.log("index:"+ index + " count:"+count)  
    }

}
function previousImg(){
    
    if(index != 1){
        //iterates over imgs in a desending manner
        const imgRemove = document.getElementById('img'+ index)
        imgRemove.classList.add('image-invisible')
        nav[index].classList.remove('bg-color');

        index--;
        count--;
        const imgAdd = document.getElementById('img'+index);
        imgAdd.classList.remove('image-invisible');
        nav[index].classList.add('bg-color');

        console.log("index:"+ index + " count:"+count)
    }
    else{
        //jumps to the last image and count if on the first image 
        const imgRemove = document.getElementById('img'+ index)
        imgRemove.classList.add('image-invisible');
        nav[index].classList.remove('bg-color');

        const imgAdd = document.getElementById('img'+totalImg);
        imgAdd.classList.remove('image-invisible');
        nav[totalImg].classList.add('bg-color');

        index = totalImg;
        count = totalImg;
        console.log("index:"+ index + " count:"+count)
    }
}

function autoLoadNavBtn(){
    //navigation buttons are autoloaded to the dom according to the max images
    for(let i = 1; i <= totalImg;i++){
        nav[i] = document.createElement('button');
        nav[i].textContent = 'o';
        nav[i].classList.add('nav-btn');
        nav[i].id = i;
        nav[i].addEventListener('click', navDots)
        navBtnContainer.appendChild(nav[i]);
    }
}

function navDots(e){
    //navigation button's image is set based on the id

    console.log(e.target.id);
    const imgRemove = document.getElementById('img'+ index);
    imgRemove.classList.add('image-invisible');
    nav[index].classList.remove('bg-color');

    const imgAdd = document.getElementById('img'+ e.target.id);
    imgAdd.classList.remove('image-invisible');
    nav[e.target.id].classList.add('bg-color');

    index = e.target.id;
    count = e.target.id;

    console.log("index:"+ index + " count:"+count);
}
autoLoadNavBtn();
nav[1].classList.add('bg-color');
