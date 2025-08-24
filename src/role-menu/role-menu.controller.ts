import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleMenuService } from './role-menu.service';
import { CreateRoleMenuDto } from './dto/create-role-menu.dto';
import { UpdateRoleMenuDto } from './dto/update-role-menu.dto';

@Controller('role-menu')
export class RoleMenuController {
  constructor(private readonly roleMenuService: RoleMenuService) { }

  @Get('role/:roleId')
  async getMenusByRoleId(@Param('roleId') roleId: string) {
    return this.roleMenuService.getMenusByRoleId(roleId);
  }

}
