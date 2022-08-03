import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeInterface } from './mod/anime.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('anime')
export class AnimeController {
    constructor(private animeservice:AnimeService){}

@Post()
create(@Body() animeinterface:AnimeInterface):Observable<AnimeInterface>{
    return  this.animeservice.createList(animeinterface)
}

@Get()
getAll():Observable<AnimeInterface[]>{
    return this.animeservice.callAnimeAll()
}

@Get(':id')
getById(@Param('id')id:string):Observable<AnimeInterface>{
    return this.animeservice.callAnimeById(Number(id))
}

@Put(':id')
updateById(@Param('id')id:string,@Body()animeinterface:AnimeInterface):Observable<UpdateResult>{
    return this.animeservice.updateNewAnimeById(Number(id),animeinterface)
    
}

@Delete(':id')
deleteById(@Param('id')id:string):Observable<DeleteResult>{
    return this.animeservice.deleteAnimeById(Number(id))
}

}
