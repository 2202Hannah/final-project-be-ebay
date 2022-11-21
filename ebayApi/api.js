const axios = require("axios");
const tokenGenerator = require("./tokenGenerator.js");

//(1) Each call to have gift hardcoded in   --------------done
//(2) Seperate calls to the api for each keyword
// (3) only send 20 items to front-end
// (4) if only 1 key word send 20 items, if 2 keywords send 10 from each

const fetchItems = (arrOfKeyWords) => {
  const limit = Math.floor(20 / arrOfKeyWords.length);

  return Promise.all(
    arrOfKeyWords.map((word) => {
      return tokenGenerator()
        .then((data) => {
          const config = {
            headers: { Authorization: `Bearer ${data}` },
          };

          return axios.get(
            `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${word} gift -card -cards&limit=${limit}`,
            config
          );
        })
        .then(({ data }) => {
          return data.itemSummaries.map((item) => {
            return {
              itemId: item.itemId,
              title: item.title,
              categories: item.categories,
              image: item.image,
              price: item.price,
              thumbnailImage: item.thumbnailImages,
              shippingOptions: item.shippingOptions,
              buyingOptions: item.buyingOptions,
              itemWebUrl: item.itemWebUrl,
              additionalImages: item.additionalImages,
              adultOnly: item.adultOnly,
            };
            // console.log(word);
            // return giftArray;
            // console.log(giftArray);
          });
         
        });
    })
  );
};

// David's code

//arrOfKeyWords.forEach((element) => {
// return tokenGenerator()
// .then(data => {
//   const config = {
//     headers: { Authorization: `Bearer ${data}` }
//   };
//     return axios.get(
//     `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${element} gift&limit=2`,
//     config
//   );
// })
// .then(({ data }) => {
//   console.log(data)
//  console.log(data.itemSummaries)
//   return data.itemSummaries.map(item => {
//     console.log(item + "in map")
//     return {
//       itemId: item.itemId,
//       title: item.title,
//       categories: item.categories,
//       image: item.image,
//       price: item.price,
//       thumbnailImage: item.thumbnailImages,
//       shippingOptions: item.shippingOptions,
//       buyingOptions: item.buyingOptions,
//       itemWebUrl: item.itemWebUrl,
//       additionalImages: item.additionalImages,
//       adultOnly: item.adultOnly
//     };
module.exports = { fetchItems };
