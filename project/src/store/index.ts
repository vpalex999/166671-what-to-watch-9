import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import { rootReducer } from './root-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

// Тестировать HOC, middleware, собственные хуки пока не нужно.
// К ним вернёмся в следующем задании.
// Создавать снепшот-тесты не нужно. В демо-проекте они представлены лишь для ознакомления.

//TODO: Воспользуйтесь React Testing Library и напишите тесты для простых компонентов.
// Простые компоненты — компоненты, в которых не используются хуки эффектов, нет взаимодействия с не React-компонентами (карты, плееры и так далее).
// Ограничьтесь проверками на корректность отрисовки.
// Взаимодействовать с элементами (эмулировать нажатие на кнопки и так далее) — тоже не нужно. Это тема следующего раздела.

// TODO: Напишите тесты для проверки маршрутизации в приложении.
