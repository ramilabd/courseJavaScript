/*
* Наимньшая разница между углами. Моя версия
* */
const diff_1 = (angle1, angle2) =>{
    let max_angle = Math.max(angle1, angle2);
    let min_angle = Math.min(angle1, angle2);
    let result2 = max_angle - min_angle < 360 - (max_angle - min_angle) ? max_angle - min_angle : 360 - (max_angle - min_angle);
    return result2;
};

/*
* Наимньшая разница между углами. Версия Хекслета.  "Все гениальное - просто"
* */
const diff_2 = (a, b) => {
    const angle = Math.abs(a - b);
    return Math.min(angle, 360 - angle);
};

console.log(diff_1(0, 45));
console.log(diff_2(0, 180));
console.log(diff_1(0, 190));
console.log(diff_2(120, 280));
console.log(diff_2(300, 45));

// diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
// diff(0, 180) === 180;
// diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
// diff(120, 280) === 160;     // не 200, а 160, потому что 160 меньше

