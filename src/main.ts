/*
 * @Author: ZiRui
 * @LastEditors: ZiRui
 * @Date: 2024-10-29 11:33:16
 * @LastEditTime: 2024-10-30 09:30:26
 * @Description: 
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
