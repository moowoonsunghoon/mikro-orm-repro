import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { Team } from './team.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      host: 'localhost',
      port: 5432,
      password: '',
      migrations: {
        path: './',
      },
      entities: ['./dist/*.entity.js'],
      entitiesTs: ['./src/*.entity.ts'],
      dbName: 'test',
      type: 'postgresql',
    }),
    MikroOrmModule.forFeature([User, Team]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
