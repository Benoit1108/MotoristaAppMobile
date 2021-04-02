const URL_BASE = 'http://10.0.2.2/Motorista/api/';

export function getAllCars() {
    return fetch(URL_BASE + 'cars.php')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getAllCarsByMark(idMark) {
    return fetch(URL_BASE + 'cars.php?idMarque=' + idMark)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getAllCarsByModel(idModel) {
    return fetch(URL_BASE + 'cars.php?idModele=' + idModel)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getCarImage(path) {
    return ('http://10.0.2.2/Motorista/Images/' + path)
}

export function getCarById(idCar) {
    let data = new FormData()
    data.append('idCar', idCar)
    return fetch(URL_BASE + 'cars.php', {method: 'POST', body : data})
        .then((response) => response.json())
        .catch((error) => console.error(error));
}