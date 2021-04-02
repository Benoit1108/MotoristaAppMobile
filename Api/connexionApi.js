const URL_BASE = 'http://localhost/Motorista/api/';

export function getAuthentification(mail, login, password) {
    return fetch(
        URL_BASE +
        'authentication.php?emailC=' + mail +
        '&loginC=' + login +
        '&mdpC=' + password,
    )
        .then(response => response.json())
        .catch((error) => console.error(error));
}