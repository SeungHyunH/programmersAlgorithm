process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const numbers = data.split(" ");
    const n = Number(numbers[0]), m = Number(numbers[1]);
    console.log(('*'.repeat(n)+'\n').repeat(m));
});