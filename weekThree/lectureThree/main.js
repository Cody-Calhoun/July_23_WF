// let waveOne = document.querySelector(".item-1")
// // <span class="item-1">1</span
// let waveTwo = document.querySelector(".item-2")
// // <span class="item-2">2</span
// let waveThree = document.querySelector(".item-3")
// // <span class="item-3">3</span

function increaseWaves(indicator){
    if (indicator == 'item-1'){
        waveOne.innerText = parseInt(waveOne.innerText) + 1
    }
    else if ( indicator == 'item-2'){
        waveTwo.innerText = parseInt(waveTwo.innerText) + 1
    }
    else{
        waveThree.innerText = parseInt(waveThree.innerText) + 1
    }
}
