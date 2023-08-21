
function printAsyncName(callback, name) {
    setInterval(callback, 1000);
    setInterval(() => console.log(name), 2000);
}

printAsyncName(() => console.log("Hi"), "Nico")


