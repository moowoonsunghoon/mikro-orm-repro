import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class AppService {
  constructor(
    private em: EntityManager,
    @InjectRepository(User) private userRepository: EntityRepository<User>,
  ) {}

  async delete() {
    const user = await this.userRepository.find({});
    await this.em.removeAndFlush(user);
  }

  async createUser() {
    const user = await this.userRepository.create({});
    await this.em.persistAndFlush(user);
  }
}
