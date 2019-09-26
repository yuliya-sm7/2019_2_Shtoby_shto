/**
 * Отправляет запрос авторизации
 * @param  {string} path
 * @param {Object} body
 * @return {Promise} promise
 */
export function doPost(path = '/', body = null) {
  const promise = fetch('http://localhost:8080' + path, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: body,
  })
      .then((res) => res.json())
      .then((response) => console.log('Успех:', JSON.stringify(response)))
      .catch((error) => alert(error.message));
  return promise;
}
