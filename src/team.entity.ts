import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

import { User } from './user.entity';

@Entity()
export class Team {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `gen_random_uuid()` })
  id!: string;

  @ManyToOne(() => User)
  owner?: User;
}
