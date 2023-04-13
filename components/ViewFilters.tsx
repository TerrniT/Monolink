import { useFilterViewStore } from '@/store/store'
import { Tab } from '@headlessui/react'
import React from 'react'
import { FaListUl } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'


const ViewFilters = () => {
  const { setCard, setList, card, list } = useFilterViewStore((state) => ({
    setCard: state.setCardView,
    setList: state.setListView,
    list: state.listView,
    card: state.cardView,

  }))

  //TODO: fix after reloading page state of choosed tab dont save

  return (
    <Tab.Group>
      <Tab.List as='div' className="flex gap-8"  >
        <Tab onClick={() => setCard()} className="ui-selected:text-accent-green outline-none">
          <div className='flex items-center justify-center gap-3'>
            <span className='w-0.5 h-8 bg-zinc-700 block'></span>
            <MdOutlineDashboard />
            <p>Card</p>
          </div>
        </Tab>
        <Tab onClick={() => setList()} className="ui-selected:text-accent-green outline-none">
          <div className='flex items-center justify-center gap-3'>
            <span className='w-0.5 h-8 bg-zinc-700 block'></span>
            <FaListUl />
            <p>List</p>
          </div>
        </Tab>
      </Tab.List>
    </Tab.Group>
  )
}

export default ViewFilters
