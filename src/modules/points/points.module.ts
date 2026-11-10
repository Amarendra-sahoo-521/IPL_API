import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {   PointsController } from "./points.controller";
import {   PointsService } from "./points.service";
import { PointEntity } from "../../entities/points.entity";

@ Module({
    imports: [
        TypeOrmModule.forFeature([PointEntity])
    ],
    controllers: [
          PointsController
    ],
    providers: [
          PointsService
    ],
    exports: []
})
  export class PointsModule {}