import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentification/authentification.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthenticationModule, UsersModule, PostsModule],
})

export class AppModule {}