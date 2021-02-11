import React from 'react'

const ChatCard = () => {
    return (
        <div class="p-6 max-w-sm mx-auto mt-8 bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
          </div>
          <div>
            <div class="text-xl font-medium text-black">Chat card title</div>
            <p class="text-gray-500">Message content!</p>
          </div>
        </div>
    )
}

export default ChatCard
