import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableSwagger } from './swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  enableSwagger('/swagger', app);
  await app.listen(3000);
}
bootstrap();
