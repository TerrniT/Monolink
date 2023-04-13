import { LinkDef } from '@/types'
import React from 'react'
import LinkRow from '../LinkRow'

type Props = {
  data: LinkDef[] | undefined
}

const ListView = ({ data }: Props) => {
  return (
    <>
      {data?.map((link: LinkDef) => (
        <LinkRow
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

export default ListView

