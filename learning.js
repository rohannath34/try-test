// starting js
document.querySelector('#btn').addEventListener("click",toggle)

    function toggle(){

document.querySelector('#para').textContent="1,2,3,4,5,6,7,8,9,10"

let para = document.querySelector('#para')

if(para.style.display != 'block'){   //'para.style.display' is important because with this the paragraph is showing and hiding.

    para.style.display ='block'
}else{
    para.style.display = 'none'
}
}    


// heading showing and hidding toggle

document.querySelector('.btn1').addEventListener("click",function(){

    document.querySelector('.head2').textContent='How are you?'

    let headShowing = document.querySelector('.head2')

    if(headShowing.style.display != 'block'){

        headShowing.style.display = 'block'

    }else{

        headShowing.style.display = 'none'
    }
})

//image show and hidding toggle

document.querySelector(".showHideRon").addEventListener("click",function(){

    let footBall = document.querySelector(".ron")

    if(footBall.style.visibility != "hidden"){

        footBall.style.visibility = "hidden"
        
    }else{
        
        footBall.style.visibility = "visible"
    }
})

//text color change toggle

document.querySelector(".colorChange").addEventListener("mouseover",function(){

    let colorChange = document.querySelector(".textDesign")

    if(colorChange.style.color != 'red'){

        colorChange.style.color ='red'

    }else if(colorChange.style.color !='green'){

        colorChange.style.color ='green'

    // }else if(colorChange.style.color!='blue'){

    //     colorChange.style.color='blue'

    }else{
        colorChange.style.color ='black'
    }
})

//font size change with toggle function

document.querySelector(".colorChange").addEventListener("click",function(){

    let sizeChange=document.querySelector(".textDesign")

    if(sizeChange.style.fontSize != '50px'){

        sizeChange.style.fontSize = '50px'

    }else{
        
        sizeChange.style.fontSize = '15px'
    }
})

// show and hide car with toggle

document.querySelector(".btn2").addEventListener("click",function(){

    let carShowHide = document.querySelector(".car1")

    if(carShowHide.style.visibility != 'hidden'){

        carShowHide.style.visibility = 'hidden'
    }else{
        carShowHide.style.visibility = 'visible'
    }
    // alert('showing and hidding car!')
})

//xylophone creating with for loop and switch statement

let musicXylo = document.querySelectorAll('.xylophone').length

for(let i=0;i<musicXylo;i++){

    document.querySelectorAll('.xylophone')[i].addEventListener("click",function(){
        
       let myPlay = this.textContent
      
       switch(myPlay){

        case "a":
            let audio1 = new Audio('sound/xylophone-1.mp3')
            audio1.play()
            break;

        case "b":
            let audio2 = new Audio('sound/xylophone-2.mp3')
            audio2.play()
            break;

        case "c":
            let audio3 = new Audio('sound/xylophone-3.mp3')
            audio3.play()
            break;

        case "d":
            let audio4 = new Audio('sound/xylophone-4.mp3')
            audio4.play()
            break;

        case "e":
            let audio5 = new Audio('sound/magicDay.mp3')
            audio5.play()
            break;

            default:
                console.log('nothing')
       }

})

}


const select = document.querySelector('#weather')
const para = document.querySelector('.finalState')

select.addEventListener("change",function(){
    const choise = select.value

    if (choise==='sunny') {
        para.textContent='This is a sunny day, so play without any hasitation.'
    }else if (choise === 'rainy') {
        para.textContent='Today weather is rainny, so take raincote with you.'
    }else if (choise === 'snowing') {
        para.textContent='Today showing, you can make snowman or take hot cup of coffee.'
    }else if (choise === 'overcast') {
        para.textContent='Today\'s weather is not so good'
    }else{
        para.textContent=''
    }
})

