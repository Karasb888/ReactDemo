export const fetchListData = url =>
  fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error(res.statusText);
  });
