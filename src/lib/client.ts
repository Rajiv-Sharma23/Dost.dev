import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
  }

const globalForPrisma = globalThis as unknown as { prisma : PrismaClient}

 const prisma = globalForPrisma.prisma || new PrismaClient()

export default prisma

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma ;