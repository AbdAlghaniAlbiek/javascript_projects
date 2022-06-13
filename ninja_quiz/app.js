const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
            score += 25; 
    });

    // show result on page
    scrollTo(0, 0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }

    }, 10);
}); 


// ----------------------------- widnow global object -----------------------------

// console.log('Hello');
// window.console.log('Hello');

// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'));

// alert('Hello');
// widnow.alert('Hello');

// setTimeout(() => {
//     // do something
//     console.log('Say hello');
// }, 3000);


// let i = 0;
// const timer = setInterval(() => {
//     console.log('Hello');

//     if(i === 5){
//         clearInterval(timer);
//     }
//     i++;
        
// }, 1000);