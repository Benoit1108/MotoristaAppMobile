const URL_BASE = 'http://10.0.2.2/Motorista/api/';

export function getModelById(idModel) {
    let data = new FormData()
    data.append('idModel', idModel)
    return fetch(URL_BASE + 'cars.php', { method: 'POST', body: data })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}