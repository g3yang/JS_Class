const greet = require('./greeting.js');
const Circle = require('./circle');

const greetingDiv = document.getElementById('greeting');
greetingDiv.textContent = greet();

const btn = document.getElementById('btn');

btn.onclick = ()=>{
    const radius = document.getElementById('radius').value;
    const c = new Circle(radius);
    document.getElementById('area').textContent = c.getArea();
};