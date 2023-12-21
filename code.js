const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const category = document.querySelector('#category');

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height => ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight => ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = (bmi);
        if (bmi < 18.60) {
            category.innerHTML = "You are in under weight category";    
        } else if (bmi >= 18.60 && bmi <= 24.90) {
            category.innerHTML = "You are in normal weight category";
        } else {
            category.innerHTML = "You are in over weight category";
        }
    }
})