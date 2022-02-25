import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { CreatePostDto } from '../dtos/create-post.dto';
import { JwtGuard } from 'src/authentication/guards/authentication.guards';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() data: CreatePostDto) {
    return this.postsService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.delete(JSON.parse(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return this.postsService.update(JSON.parse(id), data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(JSON.parse(id));
  }

  @Get()
  findMany() {
    return this.postsService.findMany();
  }

}