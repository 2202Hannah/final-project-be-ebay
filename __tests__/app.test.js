const request = require("supertest");
const app = require("../app.js");
const db = require("../db/connection");

const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");

afterAll(() => {
  db.end();
});

beforeEach(() => {
  return seed(data);
});

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

describe("GET /api/users", () => {
  test("return status 200 when successful", () => {
    return request(app)
      .get("/api/users")
      .expect(200);
  });
  test("return an object with the values from the users table", () => {
    return request(app)
      .get("/api/users")
      .then(({ body }) => {
        const usersArray = body.users;
        expect(usersArray).toHaveLength(4);

        usersArray.forEach(user => {
          expect(user).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              name: expect.any(String)
            })
          );
        });
      });
  });
});

describe("GET /api/users/:username", () => {
  test("200: returns an object with the values for an existing user", () => {
    return request(app)
      .get("/api/users/icellusedkars")
      .then(({ body }) => {
        expect(body.user).toEqual(
          expect.objectContaining({
            username: "icellusedkars",
            name: "sam"
          })
        );
      });
  });
  test("404: responds with an error when passed a username not present in our database", () => {
    return request(app)
      .get("/api/users/han")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("username not found in the database");
      });
  });
});
