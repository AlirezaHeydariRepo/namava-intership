const btn = document.querySelector(".more-info")
const chevron = document.querySelector(".chevron-down")
const removeClassName = (sel) => {
    document.querySelectorAll(sel).forEach((el) =>{
        const className = sel.split('.')
        if (sel == '.hide-mobile') {
            el.classList.add('show-mobile')
        }
        if (sel == '.hide-middle') {
            el.classList.add('show-middle')
        }
        el.classList.remove(className[1])
    });
};
const addClassName = (sel) => {
    document.querySelectorAll(sel).forEach((el) =>{
        const className = sel.split('.')
        el.classList.remove(className[1])
        if (sel == '.show-mobile') {
            el.classList.add('hide-mobile')
        }
        if (sel == '.show-middle') {
            el.classList.add('hide-middle')
        }
    });
};
let bool = true;
btn.addEventListener('click', () => { 
    if (bool == true) {
        removeClassName('.hide-mobile')
        removeClassName('.hide-middle')
        chevron.classList.add('open');
        bool = false;
    }
    else {
        chevron.classList.remove('open');
        addClassName('.show-mobile')
        addClassName('.show-middle')
        bool = true;
    }
});