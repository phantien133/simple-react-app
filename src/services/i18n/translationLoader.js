const resources = {
  en: {
    name: 'English',
    translationFileLoader: () => import('./locales/en.json'),
  },
  vi: {
    name: 'TV', // 'Tiếng Việt',
    translationFileLoader: () => import('./locales/vi.json'),
  },
};

export default {
  type: 'backend',
  init: () => {},
  read: (language, namespace, callback) => {
    let resource = null;
    let error = null;
    try {
      resource = resources[language]
        .translationFileLoader()[namespace];
    } catch (_error) { error = _error; }
    callback(error, resource);
  },
};
