/*
 * @Author: ZiRui
 * @LastEditors: ZiRui
 * @Date: 2024-10-29 11:33:16
 * @LastEditTime: 2024-10-29 13:48:23
 * @Description: 
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
console.log('test')
bootstrap();
