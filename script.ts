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
  // const resultado5 = await prisma.post.create({
  //   data: {
  //     title: 'Hello World'
  //   }
  // })

  // ? Escreva uma consulta para conectar os registros User e Post
  // const resultado6 = await prisma.post.update({
  //   data: {
  //     author: {
  //       connect: {
  //         id: 4
  //       }
  //     }
  //   },
  //   where: {
  //     id: 1
  //   }
  // })

  // ? Escreva uma consulta para buscar um único registro da tabela User pelo email
  // const resultado7 = await prisma.user.findUnique({
  //   where: { id: 6
  //   }
  // })

  // const resultado7 = await prisma.user.findMany({
  //   select: { id: true, email: true }
  // })

  // const resultado7 = await prisma.user.findMany()

  // console.log(resultado7[5].email)

  // ? Escreva uma consulta que selecione apenas alguns campos
  // const resultado8 = await prisma.user.findMany({
  //   select: { id: true, name: true }
  // })

  // const resultado9 = await prisma.user.findMany({
  //   where: { id: 7 },
  //   include: {
  //     Post: true
  //   }
  // })

  // const resultado10 = await prisma.user.create({
  //   data: {
  //     email: 'Alexandre@text.com',
  //     name: 'Alexandre',
  //     Post: {
  //       create: {
  //         title: 'post',
  //         content: 'hgsjhghjdsag'
  //       }
  //     }
  //   }
  // })

  // const resultado11 = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       startsWith: 'm'
  //     }
  //   }
  // })

  // const resultado12 = await prisma.user.findMany({
  //   skip: 0,
  //   take: 10
  // })

  console.log(resultado12)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
