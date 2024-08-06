import ProjectCard from "@/components/project-card";
import { projects } from "@/constant";

export default function HomePage() {
  return (
    <main className="container mx-auto my-4 w-full max-w-4xl">
      <div className="flex flex-col space-y-4">
        <section>
          <h2 className="text-xl font-semibold">Обо мне</h2>
          <p>
            Fullstack разработчик, проживающий в Москве, с практическим опытом в разработке web-приложений.
          </p>

          <h3 className="text-lg font-medium mt-2">Навыки</h3>
          <ul className="list-disc list-inside">
            <li>
              Практический опыт работы с <strong>фреймворком Next.js</strong>, базовые знания <strong>JavaScript, HTML, CSS</strong>.
            </li>
            <li>
              Работа с <strong>реляционными</strong> и <strong>нереляционными</strong> базами данных.
            </li>
            <li>
              Знание <strong>блокчейн</strong> технологии и работы <strong>смарт-контрактов</strong>.
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-2">Образование</h3>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                href="/Diplom.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-600 hover:text-black-800 underline hover:no-underline transition-colors duration-200"
              >
                Диплом
              </a>: среднее профессиональное образование, на направление Информационные системы и программирование в <strong>МПТ им. Плеханова</strong> со специализацией Программист.
            </li>
            <li>
                На момент 03.08.2024 поступил в <strong>Российский экономический университет им. Плеханова</strong>. <br /> Специализация: <a href="https://bakalavr.rea.ru/prikladnaia-informatika/inzhiniring-predpriiatii-i-informatsionnyh-sistem"               
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-600 hover:text-black-800 underline hover:no-underline transition-colors duration-200">Инжиниринг предприятий и информационных систем.</a>
            </li>
          </ul>
          <h3 className="text-lg font-medium mt-2">Дополнительно</h3>
          <p>
            Участник web3 сообщества <strong><a href="https://www.guidedao.xyz/ru" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-600 hover:text-black-800 underline hover:no-underline transition-colors duration-200">
              GuideDAO</a></strong>.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-xl font-semibold">Pet-проекты</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
