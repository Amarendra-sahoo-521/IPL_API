import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {   TeamController } from "./teams.controller";
import {   TeamService } from "./teams.service";
import { TeamLogoEntity } from "../../entities/teamLogo.entity";
import { ExcelService } from "../../utils/globalServices/excel.service";
import { TeamEntity } from "../../entities/team.entity";


@ Module({
    imports: [
        TypeOrmModule.forFeature([TeamEntity,TeamLogoEntity])
    ],
    controllers: [
          TeamController
    ],
    providers: [
          TeamService,ExcelService
    ],
    exports: []
})
  export class TeamModule {}