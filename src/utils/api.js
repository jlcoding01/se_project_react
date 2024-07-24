const baseUrl = "http://localhost:3001";

export const getData = () => {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.status}`);
  });
};

export const addData = ({ name, link, weatherType }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      //   _id: 0,
      name: name,
      imageUrl: link,
      weather: weatherType,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.status}`);
  });
};

export const deleteData = (cardId) => {
  return fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.status}`);
  });
};
