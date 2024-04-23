//Url Home
export async function fetchHome() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}

//Url Daftar Komik
export async function fetchDaftar(page = 1) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/daftar-komik/page/" + page
  );
  const data = await res.json();
  return data;
}

//Url Search
export async function fetchSearch(query, keywrod, page = 1) {
  const res = await fetch(
    `https://ranimev2-api.vercel.app/komiku/search?/${query}=keyword&page=${page}`
  );
  const data = await res.json();
  return data;
}

//Url Detail Komik
export async function fetchDetail(endpoint) {
  const res = await fetch(
    "https://ranimev2-api.vercel.app/komiku/comic/" + endpoint
  );
  const data = await res.json();
  return data;
}

//Url Chapter Detail Komik
export async function fetchBaca(endoint) {
  const res = await fetch(
    "https://ranimev2-api.vercel.app/komiku/chapter/" + endpoint
  );
  const data = await res.json();
  return data;
}
