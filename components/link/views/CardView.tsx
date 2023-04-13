import { LinkDef } from '@/types'
import React from 'react'
import LinkCard from '../LinkCard'

type Props = {
  data: LinkDef[] | undefined
}

const CardView = ({ data }: Props) => {
  return (
    <>
      {data?.map((link: LinkDef) => (
        <LinkCard
          key={link.id}
          id={link.id}
          title={link.title}
          description={link.description}
          url={link.url}
          tags={link.tags}
        />
      ))}
    </>
  )
}

export default CardView

