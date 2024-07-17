const AddOne = e => {const numel = document.getElementsByTagName('h1')[0] 
    numel.textContent = Number(numel.textContent) + 1
}

const btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', AddOne)

