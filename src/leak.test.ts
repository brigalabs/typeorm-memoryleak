import { createConnection } from "typeorm";

describe("leak detector", () => {
  it("test leak", async () => {
    let conn = await createConnection({
      name: "default",
      type: "sqlite",
      database: ":memory:",
      logging: false,
      entities: [],
    });

    await conn.close();
  });
});

