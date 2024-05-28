let loadmoreBtn1 = document.querySelector( '#load-more-1');
let currentitem1 = 4;

loadmoreBtn1.onclick =() => {
    let boxes = [ ...document. querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i =currentitem1; i <currentitem1 + 4; i++){
        boxes[i].style.display='inline-block';
    }    
    currentitem1 += 4;
    if(currentitem1 >=boxes.length) {
        loadmoreBtn1.style.display='none'
    }
}

let loadmoreBtn2 = document.querySelector( '#load-more-2');
let currentitem2 = 4;

loadmoreBtn2.onclick =() => {
    let boxes = [ ...document. querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i =currentitem2; i <currentitem2 + 4; i++){
        boxes[i].style.display='inline-block';
    }    
    currentitem2 += 4;
    if(currentitem2 >=boxes.length) {
        loadmoreBtn2.style.display='none'
    }
}

let loadmoreBtn3 = document.querySelector( '#load-more-3');
let currentitem3 = 4;

loadmoreBtn3.onclick =() => {
    let boxes = [ ...document. querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i =currentitem3; i <currentitem3 + 4; i++){
        boxes[i].style.display='inline-block';
    }    
    currentitem3 += 4;
    if(currentitem3 >=boxes.length) {
        loadmoreBtn3.style.display='none'
    }
}