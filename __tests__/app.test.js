const request = require("supertest");
const app = require("../app.js");

describe("Error handling", () => {
  test("404: responds with an error when passed a non existant end point", () => {
    return request(app)
      .get("/api/non-existant/")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Route not found");
      });
  });
});
describe("GET /api/ebayCall", () => {
  test("return status 200 when successful", () => {
    return request(app)
      .get("/api/ebayCall?keyword=drone")
      .expect(200);
  });
  test("return an object containing an item relating to one specified keyword", () => {
    return request(app)
      .get("/api/ebayCall?keyword=drone")
      .then(({ body }) => {
        const itemsArray = body.items;
        expect(itemsArray).toHaveLength(10);
        itemsArray.forEach(item => {
          expect(item.title.toLowerCase().includes("drone")).toBe(true);
          expect(item).toEqual(
            expect.objectContaining({
              itemId: expect.any(String),
              title: expect.any(String),
              categories: expect.any(Array),
              image: expect.any(Object),
              price: expect.any(Object),
              thumbnailImage: expect.any(Array),
              shippingOptions: expect.any(Array),
              buyingOptions: expect.any(Array),
              itemWebUrl: expect.any(String),
              additionalImages: expect.any(Array),
              adultOnly: expect.any(Boolean)
            })
          );
        });
      });
  });
  test("return an object containing an item relating to multiple specified keywords", () => {
    return request(app)
      .get("/api/ebayCall?keyword=pony chocolate")
      .then(({ body }) => {
        const itemsArray = body.items;
        expect(itemsArray).toHaveLength(10);
        itemsArray.forEach(item => {
          expect(
            item.title.toLowerCase().includes("pony") ||
              item.title.toLowerCase().includes("chocolate")
          ).toBe(true);
          expect(item).toEqual(
            expect.objectContaining({
              itemId: expect.any(String),
              title: expect.any(String),
              categories: expect.any(Array),
              image: expect.any(Object),
              price: expect.any(Object),
              thumbnailImage: expect.any(Array),
              shippingOptions: expect.any(Array),
              buyingOptions: expect.any(Array),
              itemWebUrl: expect.any(String),
              adultOnly: expect.any(Boolean)
            })
          );
        });
      });
  });
  test("404: responds with an error when passed a keyword that is not present in the ebay API", () => {
    return request(app)
      .get("/api/ebayCall?keyword=notarealkeyword1234")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("keyword not found");
      });
  });
  test("404: responds with an error when no keyword is provided", () => {
    return request(app)
      .get("/api/ebayCall")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("no keyword provided");
      });
  });
});
