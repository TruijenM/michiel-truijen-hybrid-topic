import * as t from 'drizzle-orm/pg-core';


export const memory = t.pgTable("memory", {
    id: t.uuid().primaryKey(),
    date: t.timestamp(),
    description: t.varchar({length: 2000}),
    imageUrl: t.varchar({length: 256}),
});