import { PrismaClient } from "@prisma/client";

// let DatabaseClient;

// // if (typeof window === "undefined") {
// if (
//     process.env.NODE_ENV === "production" ||
//     process.env.NODE_ENV === "development"
// ) {
//     DatabaseClient = new PrismaClient({
//         log: ["query"],
//     });
//     DatabaseClient.$on((e) => console.log(e));
// } else {
//     if (!global.DatabaseClient) {
//         global.DatabaseClient = new PrismaClient();
//     }
//     DatabaseClient = global.DatabaseClient;
// }
// }

const DatabaseClient =
    global.DatabaseClient ||
    new PrismaClient({
        log: ["query"],
    });

if (process.env.NODE_ENV !== "production")
    global.DatabaseClient = DatabaseClient;

export default DatabaseClient;
