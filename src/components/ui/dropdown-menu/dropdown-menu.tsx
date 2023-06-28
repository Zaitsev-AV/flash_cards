import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { UserAvatar } from '@/components/ui/avatar/avatar.tsx'

export const AvatarDropdownMenu: FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <UserAvatar />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.DropdownMenuContent}
          sideOffset={5}
          align={'end'}
          alignOffset={5}
        >
          <DropdownMenu.Item className={s.DropdownMenuItem}>New Tab</DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>New Window</DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>New Private Window</DropdownMenu.Item>

          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
