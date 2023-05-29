// let test = document.getElementById('test')
// test.innerText = 'Hello world!'
// // let lis = document.getElementsByTagName('ul')[0].getElementsByTagName('li')
// let lis = document.querySelectorAll('ul>li')
// lis = Array.from(lis)
// lis.forEach((element,index) => {
//     element.innerText = index+1 + ' li '
// });
// // lis[1].innerText = 'li 2'
// console.log(test)
// console.log(lis)

function getTask(){
    let task = document.getElementById('task').value;
    let li = document.createElement('li');
    let span = document.createElement('span')
    span.classList.add('remove')
    span.innerText = 'X'
    li.innerText = task;
    li.appendChild(span)

    let ul = document.querySelector('#toDo ul')
    if(task == ''){
        alert('the task cannot be empty')
    }
    else{
        ul.appendChild(li)
    }
    document.getElementById('task').value = ''
}
document.querySelector('#toDo ul').onclick = function (ev){
    
    if(ev.target.tagName == 'SPAN'){
        ev.target.parentElement.remove()
    }
    else{
        ev.target.classList.toggle('checked')

    }
}

