import { ThemeToggle } from '@/components/theme-toggle'

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold gradient-text">TaskMate</h1>
            <ThemeToggle />
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { name: 'Все задачи', count: 12, icon: '📋' },
              { name: 'Сегодня', count: 5, icon: '📅' },
              { name: 'Предстоящие', count: 8, icon: '📆' },
              { name: 'Выполненные', count: 24, icon: '✅' }
            ].map((item, index) => (
              <li key={index}>
                <button className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg transition-colors group">
                  <span className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {item.name}
                    </span>
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h2 className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Проекты
            </h2>
            <ul className="mt-2 space-y-2">
              {[
                { name: 'Личное', color: 'bg-blue-500' },
                { name: 'Работа', color: 'bg-green-500' },
                { name: 'Покупки', color: 'bg-purple-500' }
              ].map((project, index) => (
                <li key={index}>
                  <button className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group">
                    <span className={`h-2 w-2 ${project.color} rounded-full mr-3`}></span>
                    <span className="font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {project.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold gradient-text">Задачи на сегодня</h1>
            <button className="button-gradient text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center">
              <span className="mr-2">+</span>
              Добавить задачу
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {[
              { title: 'Разработать новую целевую страницу', project: 'Работа', priority: 'Высокий', due: 'Сегодня', completed: false },
              { title: 'Просмотреть проектное предложение', project: 'Работа', priority: 'Средний', due: 'Завтра', completed: false },
              { title: 'Купить продукты', project: 'Покупки', priority: 'Низкий', due: 'Сегодня', completed: true }
            ].map((task, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      checked={task.completed}
                      className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-primary-600 transition-colors focus:ring-primary-500 focus:ring-offset-0"
                      readOnly
                    />
                    {task.completed && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg className="h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-medium ${
                      task.completed 
                        ? 'text-gray-500 dark:text-gray-400 line-through' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {task.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{task.project}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Срок: {task.due}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        task.priority === 'Высокий' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                          : task.priority === 'Средний'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}