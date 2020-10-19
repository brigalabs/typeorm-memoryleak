import { Connection } from "typeorm";
// import { createConnection } from "typeorm";

describe("typeorm conn leak detector", () => {
  //   it("test createConnection leak", async () => {
  //     const conn: Connection | null = await createConnection({
  //       name: "default",
  //       type: "sqlite",
  //       database: ":memory:",
  //       logging: false,
  //       entities: [],
  //     });

  //     await conn.close();
  //   });

  it("test Connection leak", async () => {
    const conn: Connection | null = new Connection({
      name: "default",
      type: "sqlite",
      database: ":memory:",
      logging: false,
      entities: [],
    });

    await conn.close();
  });
});
