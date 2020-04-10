const rest = document.querySelectorAll('.card');

rest.forEach((e) => {
    e.addEventListener('click', () => {
        document.location.href = "restaurant.html";
           
    });
});


