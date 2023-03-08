import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ? Revelar a tabela interira
  // const resultado1 = await prisma.user.findMany()

  // ? criar um novo usuario
  // const resultado2 = await prisma.user.create({
  //   data: { email: 'Bob@text.com', name: 'bob' }
  // })

  // ? Atualizar o usuario anterior sem nome
  // const resultado3 = await prisma.user.update({
  //   data: { name: 'matheus' },
  //   where: {
  //     id: 4
  //   }
  // })

  // ? Criar um post com o titule de "Hello World"
  // const resultado4 = await prisma.post.create({
  //   data: {
  //     title: 'Hello World'
  //   }
  // })

  console.log(resultado5)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
