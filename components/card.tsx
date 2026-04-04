// CardWrapper.tsx (Server Component)
import CardClient from './CardClient'
import { typeProject } from './lib/types'

export default function CardWrapper({ project, index }:typeProject) {
  return <CardClient project={project} index={index} />
}

