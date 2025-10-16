let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});

const linkWork = document.querySelectorAll('.category.btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));


const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //checar se field tem a value    
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        Message.value === ''
    ) {
        //add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_plyw91u', 'template_zd33pm9', '#contact-form', 'oOHYo_hBGuWylFlQv')
            .then(() => {
                //show message add color
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent ✔';

                //remove message after 4 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 4000);
            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error)
            }
            );

        //clear input fields pedaços
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);
