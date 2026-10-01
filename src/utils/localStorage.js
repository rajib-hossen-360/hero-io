const STORAGE_KEY = 'hero_io_installed_apps';

// localStorage থেকে ইনস্টলড অ্যাপের ID লিস্ট পাওয়া
export const getInstalledAppIds = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [1, 2, 5]; // Default demo app IDs
};

// অ্যাপ ইনস্টল করা (ID যোগ করা)
export const addInstalledApp = (id) => {
  const currentIds = getInstalledAppIds();
  if (!currentIds.includes(id)) {
    const updated = [...currentIds, id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};

// অ্যাপ আনইনস্টল করা (ID রিমুভ করা)
export const removeInstalledApp = (id) => {
  const currentIds = getInstalledAppIds();
  const updated = currentIds.filter((appId) => appId !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};