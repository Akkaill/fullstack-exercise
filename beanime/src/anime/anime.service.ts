import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AnimeEntity } from './mod/anime.entity';
import { AnimeInterface } from './mod/anime.interface';

@Injectable()
export class AnimeService {
    constructor(
        @InjectRepository(AnimeEntity)
        private readonly animeRepository: Repository<AnimeEntity>
    ) {}

    createList(animeinterface: AnimeInterface): Observable<AnimeInterface> {
        return from(this.animeRepository.save(animeinterface))
    }

    callAnimeAll():Observable<AnimeInterface[]>{
        return from(this.animeRepository.find())
    }
    callAnimeById(id:number):Observable<AnimeInterface>{
        return from(this.animeRepository.findOneBy({id}))
    }
    updateNewAnimeById(id:number,animeinterface:AnimeInterface):Observable<UpdateResult>{
        return from(this.animeRepository.update(id,animeinterface))
    }
    deleteAnimeById(id:number):Observable<DeleteResult>{
        return from(this.animeRepository.delete(id))
    }

  
}
