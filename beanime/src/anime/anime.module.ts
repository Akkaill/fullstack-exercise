import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimeEntity } from './mod/anime.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AnimeEntity])],
  providers: [AnimeService],
  controllers: [AnimeController]
})
export class AnimeModule { }
