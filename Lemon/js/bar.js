const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
	const offset = circumference - percent / 100 * circumference;
	circle.style.strokeDashoffset = offset;
}

setProgress(39);

const circle2 = document.querySelector('.progress-ring__circle2');
const radius2 = circle2.r.baseVal.value;
const circumference2 = 2 * Math.PI * radius2;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

function setProgress2(percent2){
	const offset = circumference2 - percent2 / 100 * circumference2;
	circle2.style.strokeDashoffset = offset;
}

setProgress2(59);

const circle3 = document.querySelector('.progress-ring__circle3');
const radius3 = circle3.r.baseVal.value;
const circumference3 = 2 * Math.PI * radius3;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;

function setProgress3(percent3){
	const offset = circumference3 - percent3 / 100 * circumference3;
	circle3.style.strokeDashoffset = offset;
}

setProgress3(50);



