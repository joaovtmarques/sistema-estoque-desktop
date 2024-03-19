import { useNavigate } from 'react-router-dom'

import { menuArr } from '@renderer/utils/menu'

interface MenuProps {
  routeName: string
}

export function Menu({ routeName }: MenuProps): JSX.Element {
  const navigate = useNavigate()

  return (
    <nav className="flex gap-8 items-center justify-center py-8">
      {menuArr.map((route, key) => {
        return (
          <div
            key={key}
            className={`${routeName === route.route ? 'bg-blue text-white' : 'bg-secondary text-gray1/25 border-[1px] border-gray1/15'}
            flex gap-1 px-6 py-2 rounded-2xl items-center justify-center font-poppins font-semibold text-sm
            hover:bg-primary hover:text-gray1 duration-200 cursor-pointer`}
            onClick={() => navigate(route.route)}
          >
            <route.icon
              className={`h-4 w-4 ${(routeName === route.route && 'text-white') || 'text-gray1/25'}`}
            />
            {route.name}
          </div>
        )
      })}
    </nav>
  )
}
