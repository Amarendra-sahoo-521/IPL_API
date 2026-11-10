import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { playersController } from "./players.controller";
import { playersService } from "./players.service";
import { playersEntity } from"../../entities/player.entity";
import { ExcelService } from"../../utils/globalServices/excel.service";
import { TeamEntity } from"../../entities/team.entity";
import { PointEntity } from"../../entities/points.entity";

@ Module({
    imports: [
        TypeOrmModule.forFeature([playersEntity,TeamEntity,PointEntity])
    ],
    controllers: [
        playersController
    ],
    providers: [
        playersService,
        ExcelService
    ],
    exports: []
})
  export class playersModule {}