

let count= 0;

document.getElementById(`increase`).onclick = function(){
    count++;
    counter.textContent = count;
}

document.getElementById(`decrease`).onclick = function(){
    count--;
    counter.textContent = count;
}
document.getElementById(`reset`).onclick = function(){
    count=0;
    counter.textContent = count;
}