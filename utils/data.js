import {
  BsSearch,
  BsEyeFill,
  BsBookmarkFill,
  BsFillArrowLeftSquareFill,
  BsPeopleFill,
  BsTerminalFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'

import { AiFillFire, AiFillMessage } from 'react-icons/ai'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { MdNightlightRound, MdFeedback } from 'react-icons/md'
import { FaCog } from 'react-icons/fa'

export const data = [
  {
    name: 'Discover',
    items: [
      {
        title: 'Popular',
        icon: AiFillFire,
      },
      {
        title: 'Most Upvoted',
        icon: IoMdArrowRoundUp,
      },
      {
        title: 'Best Discussions',
        icon: AiFillMessage,
      },
      {
        title: 'Search',
        icon: BsSearch,
      },
    ],
  },
  {
    name: 'Manage',
    items: [
      {
        title: 'Bookmarks',
        icon: BsBookmarkFill,
      },
      {
        title: 'Reading history',
        icon: BsEyeFill,
      },
      {
        title: 'Focus Mode',
        icon: MdNightlightRound,
      },
      {
        title: 'Customize',
        icon: FaCog,
      },
    ],
  },
]

export const datafooter = [
  {
    name: '',
    items: [
      {
        title: 'Docs',
        icon: BsBookmarkFill,
      },
      {
        title: 'Changelog',
        icon: BsTerminalFill,
      },
      {
        title: 'Feedback',
        icon: MdFeedback,
      },
      {
        title: 'Invite people',
        icon: BsPeopleFill,
      },
    ],
  },
]
