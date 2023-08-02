import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
} from '@mikro-orm/core';
import { Team } from './team.entity';

@Entity()
export class User {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `gen_random_uuid()` })
  id!: string;

  @OneToMany(() => Team, (team) => team.owner, {
    cascade: [Cascade.ALL],
  })
  teams = new Collection<Team>(this);
}
