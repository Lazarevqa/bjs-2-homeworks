// Задача 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); // библиотека md5 доступна глобально
    const cached = cache.find(item => item.hash === hash);

    if (cached) {
      return "Из кеша: " + cached.value;
    }

    const result = func(...args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift(); // удаляем самый старый (первый) элемент
    }

    return "Вычисляем: " + result;
  }

  return wrapper;
}

// Задача 2
function debounceDecoratorNew(func, delay) {
  let timeout = null;
  let lastArgs = null;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeout === null) {
      // ведущий (мгновенный) вызов
      func(...args);
      wrapper.count++;

      // первый таймер – через delay сработает trailing (если есть) и затем cooldown
      timeout = setTimeout(() => {
        if (lastArgs) {
          func(...lastArgs);
          wrapper.count++;
          lastArgs = null;
        }
        // cooldown: через delay сбросим состояние
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }, delay);
    } else {
      // в режиме ожидания – сохраняем аргументы и перезапускаем таймер
      lastArgs = args;
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (lastArgs) {
          func(...lastArgs);
          wrapper.count++;
          lastArgs = null;
        }
        // cooldown после trailing
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
