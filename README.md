Session based auth, NextAuth + Prisma Client. Below is terminal output after signing in. The first two queries (account and user) are repeated right after.

to reproduce:
- `pnpm i`
- `pnpm prisma db push`
- create `.env`, paste in `.env-example`, put in discord id/secret and next-auth secret
- `pnpm build`
- `pnpm start`
- login and check db logs in terminal

```
prisma:query SELECT `main`.`Account`.`id`, `main`.`Account`.`userId` FROM `main`.`Account` WHERE ((`main`.`Account`.`provider` = ? AND `main`.`Account`.`providerAccountId` = ?) AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`User`.`id`, `main`.`User`.`name`, `main`.`User`.`email`, `main`.`User`.`emailVerified`, `main`.`User`.`image` FROM `main`.`User` WHERE `main`.`User`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`Account`.`id`, `main`.`Account`.`userId` FROM `main`.`Account` WHERE ((`main`.`Account`.`provider` = ? AND `main`.`Account`.`providerAccountId` = ?) AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`User`.`id`, `main`.`User`.`name`, `main`.`User`.`email`, `main`.`User`.`emailVerified`, `main`.`User`.`image` FROM `main`.`User` WHERE `main`.`User`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query BEGIN
prisma:query INSERT INTO `main`.`Session` (`id`, `sessionToken`, `userId`, `expires`) VALUES (?,?,?,?) RETURNING `id` AS `id`
prisma:query SELECT `main`.`Session`.`id`, `main`.`Session`.`sessionToken`, `main`.`Session`.`userId`, `main`.`Session`.`expires` FROM `main`.`Session` WHERE `main`.`Session`.`id` = ? LIMIT ? OFFSET ?
prisma:query COMMIT
prisma:query SELECT `main`.`Session`.`id`, `main`.`Session`.`sessionToken`, `main`.`Session`.`userId`, `main`.`Session`.`expires` FROM `main`.`Session` WHERE (`main`.`Session`.`sessionToken` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`User`.`id`, `main`.`User`.`name`, `main`.`User`.`email`, `main`.`User`.`emailVerified`, `main`.`User`.`image` FROM `main`.`User` WHERE `main`.`User`.`id` IN (?) LIMIT ? OFFSET ?
```