/**
 * Отправляет запрос авторизации
 * @param  {string} path
 * @param {Object} body
 * @return {Promise} promise
 */
export function doPost(path = '/', body = null) {
  console.log(body);
  return fetch('http://localhost:8080' + path, {
    method: 'POST',
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(body),
  })
      .then((res) => res.json())
      .then((response) => {
        console.log('Успех:', JSON.stringify(response));
        return response;
      })
      .catch((error) => alert(error.message));
}
