const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d8b7d9a6c9msh95b988adf85f44fp1721b2jsn54008d431a03",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  // Popular şarkıları alan fonksiyon
  async getPopular() {
    // const url = "https://shazam.p.rapidapi.com/search?term=Neffex";

    // // Apı'a istek at
    // const response = await fetch(url, options);

    // // Apı'dan gelen veriyi js nesnesine çevir
    // const data = await response.json();

    // const formattedData = data.tracks.hits.map((item) => item.track);

    // return formattedData;

    const data = await this.searchMusic("neffex");

    const data1 = await this.searchMusic("eminem");
    const data2 = await this.searchMusic("tupac");

    return [...data, ...data1, ...data2];
  }

  // Aratılan şarkı verisini alan fonksiyon

  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

    // Aratılan değer ile api'a istek at
    const res = await fetch(url, options);
    // Gelen veriyi js nesnesine çevir
    const data = await res.json();

    // Veriyi projeye uygun şekilde dönüştür
    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
  }
}
