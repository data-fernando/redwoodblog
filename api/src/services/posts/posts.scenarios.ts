import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', body: 'String', vistas: 6331491 } },
    two: { data: { title: 'String', body: 'String', vistas: 5593042 } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
