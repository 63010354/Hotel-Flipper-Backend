import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'
import { ValidationPipe } from '@nestjs/common'

const prisma = new PrismaClient

async function bootstrap() {
  // const post = await prisma.post.create({
  //   data:{

  //   }
  // })
  // console.log(post)
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4001);
}
bootstrap();
