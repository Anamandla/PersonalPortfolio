function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'docs/AnamandlaZweniCV.pdf'; // Replace with the actual path to your resume PDF
    link.download = 'Anamandla_Zweni_Resume.pdf'; // Replace with the desired filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response from the PHP file
        
    })
    .catch(error => {
        console.error('Error:', error);
        // Add error handling or feedback for the user here
    });

    // Reset the form after submission if needed
    form.reset();
}
