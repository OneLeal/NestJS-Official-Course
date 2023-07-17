import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 过滤掉未包含在装饰器中的属性
      forbidNonWhitelisted: false, // 当存在白名单之外的属性时抛出错误
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
