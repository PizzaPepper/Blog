function showElement(id) {
    let x = document.getElementById('nInicio');
    let y = document.getElementById('nDP');
    let z = document.getElementById('nContacto');
    let array = [x, y, z];
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === id) {
            array[index].style.display = "flow-root";
        } else {
            array[index].style.display = "none";
        }

    }

}