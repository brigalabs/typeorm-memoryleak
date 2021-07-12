import { Connection } from "typeorm";

describe("typeorm conn leak detector", () => {
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
