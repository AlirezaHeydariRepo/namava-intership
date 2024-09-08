const items = ['معرفی',   'مشخصات','خرید',]

function appendChildToUl(){
    const ul = document.querySelector(".menu-items");

    items.forEach((item) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${item}`))
        ul.appendChild(li)
    })
}
appendChildToUl()