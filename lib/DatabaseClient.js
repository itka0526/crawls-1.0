import { PrismaClient } from "@prisma/client";

let DatabaseClient;

if (process.env.NODE_ENV === "production") {
    DatabaseClient = new PrismaClient();
} else {
    if (!global.DatabaseClient) {
        global.DatabaseClient = new PrismaClient();
    }
    DatabaseClient = global.DatabaseClient;
}

export default DatabaseClient;
