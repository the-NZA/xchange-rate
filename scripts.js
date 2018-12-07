//Tabs Activator
window.addEventListener('DOMContentLoaded', tabSwicher);

function tabSwicher(){
    let tabs = document.querySelectorAll('.calc-switcher');
    tabs.forEach((item) => {
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('switcher_item')){
                for(let elem of item.children){
                    elem.classList.remove('active');
                }
                event.target.classList.add('active');
            }
        });
    });
}
