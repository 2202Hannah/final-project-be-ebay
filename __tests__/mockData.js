const mockData = [
  {
    itemId: "v1|254255012666|553685916991",
    title:
      "Nixie Tube Poster Print Hardware Art Engineer Gift Electronics Decor",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/254255012666?hash=item3b32c79b3a:g:HmMAAOSwmZde9~XA&amdata=enc%3AAQAHAAAA8IOsVZcoSjtY6gWn6ompRTVSEci0GnGNzfjEnZS7ry%2FN9RoIn3jzVbhkpD2NoIQIFuzdvdKujKR2obT%2BPIGEk7kbfh66gLkh9aK8fb9wzbD7uZJghdirLu4NWdg4zY123yi3YuKN5SsPU7Mvi3L6QXMkYArQTF2J%2FhZPyqexCRtGLzjZNEGe%2FxLvIbPkvXJp%2F5x1QpHzNJ9i2MDi6xomswuLF8pCb8pf%2BoDygOVNpxZGdY%2BAQpp7f%2Fr7aKezVsYJrzokbrEUGqB%2FSm6b%2FwNUoilVopeq7LWxNOeOJs%2BScUi4OQ6ubz%2BwT7z32lFAicSrew%3D%3D",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|403545453452|0",
    title:
      "Vintage HEATHKIT 1968 CHRISTMAS GIFT SUGGESTIONS Electronics Catalog Supplement",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/403545453452?hash=item5df52ef38c:g:Za8AAOSwJI9iMkRR",
    adultOnly: false
  },
  {
    itemId: "v1|175498144073|0",
    title: "Hitachi Christmas Gift Electronics 1970's Print Advertisement",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/175498144073?hash=item28dc812949:g:JWwAAOSwBoVjesE2",
    adultOnly: false
  },
  {
    itemId: "v1|313572121578|612394306198",
    title:
      "Voice / Touch Control Smart Robot Dog Electronics Robot Puppy Toys for Kids Gift",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/313572121578?hash=item49025adbea:g:ATkAAOSwbzpgzdc3",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|255834636972|0",
    title:
      "GabbaGoods 3 Piece Metallix Electronics Gift Set- Headphone/Speaker/Earbuds+Mic",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/255834636972?hash=item3b90eec2ac:g:KboAAOSwiGtjd92T",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|334473735984|543492929571",
    title:
      "NEW LIMITED Ohms Law Funny Electrical Electronics Engineer Gift T-Shirt S-3XL",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/334473735984?hash=item4de0302f30:g:atgAAOSwmUxiqB6a",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|122755618912|423176242046",
    title:
      "PHILADELPHIA EAGLES CELL PHONE ELECTRONICS CASE HOLIDAY GIFT FREE SHIPPING ",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/122755618912?hash=item1c94ce1860:g:BsYAAOSw9jZZ42xf",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|125406801011|426421378114",
    title:
      "Creative Pen Holder Alarm Clock Electronics Clock Children Gift Clock Bedroom Of",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/125406801011?hash=item1d32d3ec73:g:8qAAAOSwNi9ix5ql",
    adultOnly: false
  },
  {
    itemId: "v1|275277943987|575546790464",
    title:
      "Cable Organiser Bag Electronics Accessories Case Gadget Pouch Travel Kit Gift",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/275277943987?hash=item4017d814b3:g:eu8AAOSwxVRiXk63&amdata=enc%3AAQAHAAAA8EGzRJkCneaSDeBjq1K1Iqw0Ezd%2Bsxae8ONfNau0VPjB%2BojhuFH39BJQyEKPP7f1c76r1l2C2OWlysBPVkgVY7102HBQ11VxwCr2cKS5tgtE%2Fc4cN%2Bmx8zptuymF6zZH0QJx2SICe0twh9K3%2FVoMLCVK1jixN5qlngjc5OsWf60ehlkQ3fqfiKtPYKkD1UpYbsYJANntUpwXv7WzJz76hB0zH621fNx5teE3tBh7ZKbICzxEuZT5qymNYESr5X%2ByVYYOrmYeqHnM%2BZ2p8eTNArdCg%2F5JrMhtkVbl8fMOzcrCtgcMSLKoZOFFlkXYUUOhcw%3D%3D",
    additionalImages: [Array],
    adultOnly: false
  },
  {
    itemId: "v1|314219262816|0",
    title:
      "Magazine Book and Comic Boards And Bags / Sleeves [Many Sizes eg Gift Wrapping ]",
    categories: [Array],
    image: [Object],
    price: [Object],
    thumbnailImage: [Array],
    shippingOptions: [Array],
    buyingOptions: [Array],
    itemWebUrl:
      "https://www.ebay.com/itm/314219262816?hash=item4928ed7360:g:e9sAAOSwGctjZ9xd&amdata=enc%3AAQAHAAAA8Lood8saq%2BTBikQbJFS1EqqE2piu8W3fWIO6je3%2FVEoz0cAKr6XHcEtmFHCSz5exzBod1%2FGTeD4S2xk%2BgPnhAnzxxRq5nGkHxdArULx1eXcvYUci45uPp8eVSt7Qj5%2BebTiksWEzSsO63VmUNZEPxYeSg67f9kaAPqFnasb3Pl9FsR9sPrvs1LLBFtpDP%2FleZDZEWjd%2FxuBeeFVZdU1P1SWs%2BxY5bBfzI02A6a35lieMNsKTAwR6a5At4KpATsDPARJTNrJVsL5d2UAnlNKF9EE4tJSzqLGcUyF3RbDfJ0vOcp1fK0ehc9L8yDvUVa5yEA%3D%3D",
    additionalImages: [Array],
    adultOnly: false
  }
];

module.exports = mockData;
