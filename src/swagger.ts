import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function enableSwagger(
  path: string,
  app: INestApplication,
  // configService: ConfigService,
): INestApplication {
  const config = new DocumentBuilder()
    // .setTitle('Hello world example')
    // .setDescription('The cats API description')
    // .setVersion('1.0')
    // .addTag('cats')
    .addSecurity('Authorisation', {
      type: 'apiKey',
      in: 'header',
      name: 'access_token',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    // ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup(path, app, document, {
    jsonDocumentUrl: 'swagger/json',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  return app;
}
