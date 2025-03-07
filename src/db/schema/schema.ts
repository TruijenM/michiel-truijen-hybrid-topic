import * as t from 'drizzle-orm/pg-core';


export const memories = t.pgTable("memories", {
    id: t.uuid().primaryKey().defaultRandom(),
    date: t.timestamp(),
    description: t.varchar({length: 2000}),
    imageUrl: t.varchar({length: 256}),
});