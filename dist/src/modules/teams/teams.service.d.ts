import { Repository } from 'typeorm';
import { teamDto } from './teams.dto';
import { ExcelService } from '../../utils/globalServices/excel.service';
import { TeamEntity } from '../../entities/team.entity';
import { IResponse } from '../../interfaces/api.response';
export declare class TeamService {
    private repository;
    private readonly excelService;
    constructor(repository: Repository<TeamEntity>, excelService: ExcelService);
    save(AgentCommissiomtoUploadtDto: teamDto): Promise<IResponse>;
    findAll(): Promise<IResponse>;
    update(id: number, files: Express.Multer.File[]): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
}
