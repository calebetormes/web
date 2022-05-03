import {ChatTeardropDots} from 'phosphor-react';

import { Popover } from '@headlessui/react'

export function Widget() {



  return (
    <Popover className='absolute bottom-4 right-4'>   
    < Popover.Panel><p>OpenClose</p></Popover.Panel>

      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <h1><ChatTeardropDots className='w-6 h-6'/></h1>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          FeedBack</span>

      </Popover.Button>

      
    </Popover>
  )
}