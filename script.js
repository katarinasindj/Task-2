document.querySelectorAll('.acc-question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('click!');
        let accCollapse = item.nextElementSibling;

        if(!item.classList.contains('open')) {
            console.log('Open acc');


            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;
            console.log(accHeight);

            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

           
            accCollapse.classList = 'acc-collapse collapsing';

           setTimeout(() => {
               console.log('Open acc content');
               accCollapse.classList = 'acc-collapse collapse open';
           }, 300);
        }

        else {
            accCollapse.classList = 'acc-collapse collapsing';

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);

            setTimeout(() => {
                console.log('Close acc content');
                accCollapse.classList = 'acc-collapse collapse';
                accCollapse.style.height = ''
            }, 300);
         }
        

        item.classList.toggle('open');
        
    });
});