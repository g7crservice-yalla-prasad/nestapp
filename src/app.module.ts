import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, ProjectsModule,   ConfigModule.forRoot({
      isGlobal: true, // Make config available app-wide
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`, // defaults to .env.dev
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
