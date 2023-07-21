import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [currentTab, setCurrentTab] = useState('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          defaultValue="all"
          orientation="horizontal"
          className="mt-10"
          onValueChange={(value) => {
            setCurrentTab(value)
          }}
        >
          <Tabs.List aria-label="Navigate Todo's statuses">
            <Tabs.Trigger
              value="all"
              className=" mr-2 rounded-full border border-gray-300 px-6 py-3 font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className="mr-2 rounded-full border border-gray-300 px-6 py-3 font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className="mr-2 rounded-full border border-gray-300 px-6 py-3 font-bold data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList tab={currentTab} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
