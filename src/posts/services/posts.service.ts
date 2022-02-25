import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';

@Injectable()
export class PostsService {
    constructor(private readonly prisma: PrismaService) {}

    create(data: CreatePostDto) {
        return this.prisma.post.create({ data })
    }

    update(id: number, data: UpdatePostDto) {
        return this.prisma.post.update({ where: { id }, data });
    }

    findOne(id: number) {
        return this.prisma.post.findUnique({ where: { id } })
    }

    delete(id: number) {
        return this.prisma.post.delete({ where: { id } })
    }
}