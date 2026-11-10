import { Repository } from 'typeorm';
import { PointsDto } from './points.dto';
import { PointEntity } from '../../entities/points.entity';
import { IResponse } from '../../interfaces/api.response';
export declare class PointsService {
    private repository;
    constructor(repository: Repository<PointEntity>);
    save(AgentCommissiomtoUploadtDto: PointsDto): Promise<IResponse>;
    findAll(): Promise<IResponse>;
    update(id: number, dto: PointsDto): Promise<IResponse>;
}
