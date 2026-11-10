import { IResponse } from '../../interfaces/api.response';
import { PaginationSortingDTO } from '../../utils/pagination.dto';
import { ExcelService } from '../../utils/globalServices/excel.service';
import { TeamEntity } from '../../entities/team.entity';
import { Repository } from 'typeorm';
import { MatchEntity } from '../../entities/match.entity';
import { MatchUpdateDto } from './matchUpdate.dto';
import { PointEntity } from '../../entities/points.entity';
export declare class MatchService {
    private repository;
    private PointRepository;
    private teamRepository;
    private readonly excelService;
    constructor(repository: Repository<MatchEntity>, PointRepository: Repository<PointEntity>, teamRepository: Repository<TeamEntity>, excelService: ExcelService);
    findAll(queryParams: PaginationSortingDTO): Promise<IResponse>;
    findA(): Promise<IResponse>;
    findAl(id: number): Promise<IResponse>;
    findAlll(id: number): Promise<IResponse>;
    setAll(): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
    update(id: number, PlayerDTO: MatchUpdateDto): Promise<IResponse>;
}
