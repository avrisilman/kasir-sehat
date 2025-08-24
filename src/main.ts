import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './common/handlers/global-exception.filter';
import { GlobalResponseInterceptor } from './common/handlers/global-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new GlobalResponseInterceptor());
  app.useGlobalFilters(new GlobalExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Pharmacy POS API')
    .setDescription('API documentation for the Pharmacy POS & Stock Opname System')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    },
      'access-token',)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  document.paths = Object.fromEntries(
    Object.entries(document.paths).map(([path, methods]) => {
      const updatedMethods = Object.fromEntries(
        Object.entries(methods).map(([method, operation]) => {
          return [
            method,
            {
              ...operation,
              security: [{ 'access-token': [] }],
            },
          ];
        }),
      );
      return [path, updatedMethods];
    }),
  );

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
