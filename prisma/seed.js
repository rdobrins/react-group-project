const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const ryan = await prisma.user.upsert({
    where: { email: 'ryan@linksquares.com' },
    update: {},
    create: {
      email: 'ryan@linksquares.com',
      role: 'USER'
    },
  })

  const eddie = await prisma.user.upsert({
    where: { email: 'esanmarco@linksquares.com' },
    update: {},
    create: {
      email: 'esanmarco@linksquares.com',
      role: 'ADMIN'
    },
  })
  console.log({ ryan, eddie })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
