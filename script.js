newStr = [];

var unicode = {
    a: '&#8896;',
    b: '&#388;',
    c: '&#663;',
    d: '&#598;',
    e: '&#8707;',
    f: ['&#429;', '&#644;', '&#1274;']
};

function randomize(array) {
    if (Array.isArray(array)) {
        return array[Math.floor(Math.random() * array.length)];
    } else {
        return array;
    }
}

function translate() {
    var input = document.getElementById('name').value;
    var chars = input.split('');

    for (i = 0; i < chars.length; i++) {
        switch (chars[i]) {
            case 'a':
                newStr[i] = chars[i].replace('a', unicode.a);
                break;
            case 'b':
                newStr[i] = chars[i].replace('b', unicode.b);
                break;
            case 'c':
                newStr[i] = chars[i].replace('c', unicode.c);
                break;
            case 'd':
                newStr[i] = chars[i].replace('d', unicode.d);
                break;
            case 'e':
                newStr[i] = chars[i].replace('e', unicode.e);
                break;
            case 'f':
                newStr[i] = chars[i].replace('f', randomize(unicode.f));
                break;
            default:
                newStr[i] = chars[i];
        }
    }

    document.getElementById('result').innerHTML = newStr.join('');

    newStr = [];
}
