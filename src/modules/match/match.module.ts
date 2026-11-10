import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MatchController } from "./match.controller";
import { MatchService } from "./match.service";

import { ExcelService } from"../../utils/globalServices/excel.service";
import { TeamEntity } from"../../entities/team.entity";
import { MatchEntity } from"../../entities/match.entity";
import { PointEntity } from"../../entities/points.entity";

@ Module({
    imports: [
        TypeOrmModule.forFeature([MatchEntity,TeamEntity,PointEntity])
    ],
    controllers: [
        MatchController
    ],
    providers: [
        MatchService,
        ExcelService
    ],
    exports: []
})
  export class MatchModule {}