"use client"
import { Link } from 'lucide-react';
import React, { useState } from 'react';

const Uchenie = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <main className="container mx-auto my-4 w-full max-w-4xl">
      <section className="mt-8">
      <h2 className="text-xl font-semibold md:text-2xl">Основная информация</h2>
      <ul className="list-disc list-inside mt-2">
          <li><strong>Цель проекта:</strong> Создание инновационной онлайн-платформы для дистанционного обучения</li>
          <li><strong>Функционал:</strong> Подача и проверка практических заданий, учет данных студентов, интуитивный интерфейс и система мотивации с использованием криптовалюты</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Инструментальные средства и технологии</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Next.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>PostgreSQL</li>
            <li>Prisma DB</li>
            <li>Supabase</li>
            <li>Grafana</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Функционал платформы</h2>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">1) Регистрация и авторизация</h3>
          <p className="mt-2">Система регистрации и авторизации пользователей включает в себя строгие проверки пароля, отсутствие пустых строк, и шифрование паролей после регистрации для обеспечения безопасности данных пользователей.</p>
          
          <div className={`zoom-container ${zoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
            <picture className="img zoom">
              <img 
                src="/images/hashPasswordSupabase.png"
                alt="Password Hashing with Supabase"
                className="max-w-full h-auto" // Гарантирует, что изображение будет адаптивным

              />
            </picture>
          </div>
        
          <div className="video-container">
  <video controls preload="metadata">
    <source src="/videos/auth.mp4" type="video/mp4" />
    <source src="/videos/auth.webm" type="video/webm" />
    <source src="/videos/auth.ogv" type="video/ogg" />
    Ваш браузер не поддерживает воспроизведение видео.
  </video>
</div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">2) Создание и загрузка практических работ</h3>
          <p className="mt-2">Каждый пользователь имеет свою зону ответственности: студенты могут загружать практические работы, а преподаватели создают задания. Преподаватели отвечают за свои группы и предметные области, к которым прикреплены студенты.</p>
          <video controls className="mt-4 w-full rounded-lg shadow-lg" preload="metadata">
            <source src="/videos/createpract.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">3) Оценка и система поощрений</h3>
          <p className="mt-2">Преподаватели могут выставлять оценки за выполненные задания. Для каждой группы создаются практические работы, и студенты могут отслеживать свой прогресс. За каждую оценку студенты получают токены MPT, что служит дополнительной мотивацией и стимулирует их к активному обучению.</p>
          <video controls className="mt-4 w-full rounded-lg shadow-lg" preload="metadata">
            <source src="/videos/gradeSistem.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Структура базы данных</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Основные таблицы и связи:</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>User:</strong> Содержит информацию о пользователях, включая роль, адрес кошелька, принадлежность к группе и предметы.</li>
            <li><strong>AttachedFile:</strong> Хранит данные о файлах, прикрепленных к практическим работам, с возможностью оценки.</li>
            <li><strong>File:</strong> Хранит файлы, связанные с практическими работами.</li>
            <li><strong>Subject:</strong> Описывает предметы, включая их описание и цвет фона, а также связи с практическими работами и группами.</li>
            <li><strong>SubjectGroup:</strong> Связывает предметы, группы и преподавателей.</li>
            <li><strong>PracticalWork:</strong> Содержит данные о практических работах, их описаниях и связанных файлах.</li>
            <li><strong>Group:</strong> Описывает группы, включая пользователей, практические работы и предметы, связанные с факультетом.</li>
            <li><strong>Faculty:</strong> Содержит информацию о факультетах и их группах.</li>
          </ul>

        </div>
        <div className={`zoom-container ${zoomed ? 'zoomed' : ''} cursor-pointer`} onClick={handleZoom}>
  <picture className="img zoom">
    <img 
      src="/images/ERDUchenie.png"
      alt="Password Hashing with Supabase"
      className="max-w-full h-auto" // Убедитесь, что изображение легко нажимается
    />
  </picture>
</div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Роль и функции таблицы SubjectGroup</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Таблица SubjectGroup позволяет:</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Связывать предметы и группы:</strong> Обеспечивает связь между предметами и группами, организуя учебный процесс.</li>
            <li><strong>Назначение преподавателей:</strong> Позволяет назначать конкретных преподавателей к конкретным предметам и группам.</li>
            <li><strong>Отслеживание прогресса:</strong> Упрощает учет успеваемости студентов.</li>
            <li><strong>Управление материалами:</strong> Организует учебные материалы и задания по предметам для конкретных групп.</li>
            <li><strong>Изменение учебного плана:</strong> Гибкость в добавлении новых предметов или изменении преподавателей.</li>
            <li><strong>Аналитика и отчетность:</strong> Позволяет генерировать отчеты и проводить аналитику по успеваемости студентов и нагрузке преподавателей.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">
        <div className="flex mt-2">
        <Link/>
            <a href="https://github.com/invalidBEZpedaly/uchenie.git" className="text-black-500 mr-4">Ссылка на GitHub проекта</a>
          </div>
        
        </h2>
      </section>
    </main>
  );
};

export default Uchenie;
