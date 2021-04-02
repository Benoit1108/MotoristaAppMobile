const URL_BASE = 'http://localhost/Motorista/api/';

export function getAllCustomers() {
    return fetch(URL_BASE + 'customers.php')
        .then(response => response.json())
        .catch((error) => console.error(error));
}

export function getCustomersById(idCustomers) {
    return fetch(URL_BASE + 'customers.php?=numC' + idCustomers)
        .then(response => response.json())
        .catch((error) => console.error(error));
}

export function getCustomersByTypesOfCustomers(idTypeCustomers) {
    return fetch(URL_BASE + 'customers.php?=numTypeClient' + idTypeCustomers)
        .then(response => response.json())
        .catch((error) => console.error(error));
}