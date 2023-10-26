export const getLocalDateString = (date) =>
  date.toLocaleString('ru-RU', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

// Обработал основные ошибки из доки
export const getError = (errorCode) => {
  switch (errorCode) {
    case '400':
      return 'Запрос не был принят из-за отсутствия требуемого параметра';

    case '401':
      return 'Недопустимый токен доступа';

    case '403':
      return 'Отсутствуют разрешения на выполнение запроса (израсходован лимит запросов)';

    case '404':
      return 'Запрошенный ресурс не существует';

    case '500':
      return 'Ошибка на сервере';

    case '503':
      return 'Ошибка на сервере';

    default:
      return 'Произошла непредвиденная ошибка';
  }
};

export const checkIfImageExists = (url) => {
  const img = new Image();

  img.src = url;

  if (img.complete) {
    return true;
  } else {
    img.onload = () => {
      return true;
    };

    img.onerror = () => {
      return false;
    };
  }
};
