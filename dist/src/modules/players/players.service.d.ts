import { IResponse } from '../../interfaces/api.response';
import { playersDto } from './players.dto';
import { PaginationSortingDTO } from '../../utils/pagination.dto';
import { playersEntity } from '../../entities/player.entity';
import { ExcelService } from '../../utils/globalServices/excel.service';
import { TeamEntity } from '../../entities/team.entity';
import { Repository } from 'typeorm';
import { FilterDTO } from './filter.dto';
import { playersUpdateDto } from './playersUpdate.dto';
import { PointEntity } from '../../entities/points.entity';
export declare class playersService {
    private repository;
    private teamRepository;
    private pointRepository;
    private readonly excelService;
    constructor(repository: Repository<playersEntity>, teamRepository: Repository<TeamEntity>, pointRepository: Repository<PointEntity>, excelService: ExcelService);
    findAll(queryParams: FilterDTO): Promise<any>;
    setimage(): Promise<IResponse>;
    setdebut(): Promise<IResponse>;
    setnetionality(): Promise<IResponse>;
    findAllbyname(queryParams: PaginationSortingDTO, name: string): Promise<IResponse>;
    importFromExcel(file: Express.Multer.File): Promise<any>;
    update(id: number, PlayerDTO: playersUpdateDto): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
    findTop(): Promise<IResponse>;
    orangecap(): Promise<IResponse>;
    purplecap(): Promise<IResponse>;
    save(Dtos: playersDto, files: Express.Multer.File[]): Promise<IResponse>;
}
