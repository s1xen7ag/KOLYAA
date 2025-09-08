
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loaderWrapper = document.querySelector('.loader-wrapper');
            loaderWrapper.style.pointerEvents = 'none'; 
            loaderWrapper.style.opacity = '0';
            setTimeout(function() {
                document.body.classList.remove('loading');
                loaderWrapper.remove();
            }, 500);
        }, 1500); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    mobileMenu.appendChild(closeBtn);
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        
    });
    
    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    const menuItems = mobileMenu.querySelectorAll('li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });



});





