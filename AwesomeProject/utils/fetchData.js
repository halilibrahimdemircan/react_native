export const fetchData = async (url, method, options) => {
  if (method == 'POST') {
    return await fetch(url, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    }).then(data => {
      // console.log('data.json()', data.json());
      return data.json();
    });
  } else if (method == 'GET') {
    return await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json());
  }
};

// export async function signAddressStart(address, slot) {
//   if (slot == 1 || slot == undefined) {
//     return fetch(url + 'api/sign_start/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({address: address}),
//     }).then(data => data.json());
//   } else if (slot > 1) {
//     return fetch(url + 'api/sign_start/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({address: address, token_slot: slot}),
//     }).then(data => data.json());
//   }
// }

// export async function getCollectionInfo(slug) {
//   return await fetch(
//     `https://api.opensea.io/api/v1/assets?collection=${slug}&format=json&limit=50&offset=50&order_direction=asc`,
//     {
//       headers: {
//         'x-api-key': selectedAPIKey,
//       },
//     },
//   )
//     .then(data => data.json())
//     .then(json => json['assets'][0]);
// }
