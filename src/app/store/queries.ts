export const fetchBannerData = async () => {
  const response = await fetch('/api/banner');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
