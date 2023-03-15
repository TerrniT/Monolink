import { LinkDef } from '@/types'
import React from 'react'
import Cardlink from './cardlink'

type Props = {
  data: LinkDef[] | undefined
}

const CardList = ({ data }: Props) => {
  return (
    <>
      {data?.map((link: LinkDef) => (
        <Cardlink
          key={link.id}
          id={link.id}
          title={link.title}
          description={link.description}
          url={link.url}
          color={link.color}
          group_tag={link.group_tag}
        />
      ))}
    </>
  )
}

export default CardList

