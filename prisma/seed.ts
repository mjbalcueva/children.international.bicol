import { Prisma, PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  const users = await db.user.createMany({
    data: [
      {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
        role: 'ADMIN',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'AliceSmith@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
        role: 'CC_COORDINATOR',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@email.com',
        password: '$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi', // password
      },
    ],
  })
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
