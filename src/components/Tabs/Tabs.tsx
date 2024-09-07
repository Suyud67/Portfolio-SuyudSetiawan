/* eslint-disable no-unused-vars */
import clsx from 'clsx'

interface TabsProps {
  tabs: string[]
  activeTab: string
  onClick: (tab: string) => void
}

const Tabs = ({ tabs, activeTab, onClick }: TabsProps) => {
  return (
    <div className={clsx('flex items-center justify-between')}>
      {tabs.map((tab, index) => {
        const firstTab = index === 0
        const lastTab = index === tabs.length - 1

        return (
          <button
            key={index}
            className={clsx(
              'py-2 px-4 font-medium transition-colors duration-300',
              'font-vr-bold text-base capitalize',
              'w-full border-t-[3px] border-b-[3px]',
              'md:py-2.5',
              firstTab && 'rounded-l-xl border-l-[3px]',
              lastTab && 'rounded-r-xl border-r-[3px]',
              activeTab === tab
                ? ['border-[#253E87] text-white bg-main-blue-800']
                : [
                    'border-gray-300 bg-main-grayscale-200 text-main-grayscale-500',
                  ]
            )}
            onClick={() => onClick(tab)}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
