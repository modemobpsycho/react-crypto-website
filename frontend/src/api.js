import { cryptoAssets, cryptoData } from "./data";

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       'X-API-KEY': '7HcdvqZqIe+L74ZU/GWfYjFvWqnikfM+v6wMDlaCmu8='
//     }
//   };

//   fetch('https://openapiv1.coinstats.app/coins', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 1000);
    });
}

export function fetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 1000);
    });
}
