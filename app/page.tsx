import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold gradient-text">
              TaskMate
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Возможности
              </Link>
              <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Цены
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                О нас
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/tasks"
              className="button-gradient text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              Открыть приложение
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-block animate-bounce mb-8 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Теперь с интеграцией Telegram
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Организуйте свою жизнь с
              <span className="gradient-text"> TaskMate</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Ваш личный менеджер задач, интегрированный с Telegram. Отслеживайте привычки, управляйте задачами и повышайте продуктивность с нашим интуитивным интерфейсом.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="button-gradient text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Начать бесплатно
              </Link>
              <Link
                href="/demo"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Посмотреть демо
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              Всё необходимое для организации
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Мощные функции, которые помогут вам контролировать задачи и привычки
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📋",
                  title: "Управление задачами",
                  description: "Создавайте, организуйте и отслеживайте свои задачи с легкостью. Устанавливайте приоритеты и сроки."
                },
                {
                  icon: "🎯",
                  title: "Отслеживание привычек",
                  description: "Формируйте лучшие привычки с нашей системой отслеживания. Следите за прогрессом и оставайтесь мотивированными."
                },
                {
                  icon: "📱",
                  title: "Интеграция с Telegram",
                  description: "Получайте доступ к задачам прямо из Telegram. Получайте уведомления и обновления там, где вам удобно."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg card-hover">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 gradient-text">Нам доверяют тысячи пользователей</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Активных пользователей" },
                { number: "1M+", label: "Выполненных задач" },
                { number: "50K+", label: "Отслеживаемых привычек" },
                { number: "4.9/5", label: "Рейтинг пользователей" }
              ].map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">TaskMate</h3>
              <p className="text-gray-600 dark:text-gray-300">Ваш личный менеджер задач, интегрированный с Telegram.</p>
            </div>
            {[
              {
                title: "Продукт",
                links: ["Возможности", "Цены", "FAQ", "Поддержка"]
              },
              {
                title: "Компания",
                links: ["О нас", "Блог", "Карьера", "Контакты"]
              },
              {
                title: "Правовая информация",
                links: ["Конфиденциальность", "Условия", "Безопасность"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={`/${link.toLowerCase()}`} 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}