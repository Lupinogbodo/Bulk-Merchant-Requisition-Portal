import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sessionConfig } from 'session/session.config';
import pg from 'pg';
import pgSession from 'connect-pg-simple';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pgPool = new pg.Pool({
    connectionString: 'postgresql://postgres:infernus@localhost:5432/SignUp_DB', });
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type',
    'Authorization',
    'Accept',
    'Accept-Encoding',
    'Accept-Language',
    'Cache-Control',
    'If-Match',
    'If-Modified-Since',
    'If-None-Match',
    'If-Unmodified-Since',
    'User-Agent',],
    credentials: true,
  });
  sessionConfig(app);
  const config = new DocumentBuilder()
  .setTitle('Test Api')
  .setDescription('The Sign In User API description')
  .setVersion('0.1')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
