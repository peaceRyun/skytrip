export function groupForecastByDate(data) {
  return data.reduce((acc, item) => {
    const { fcstDate } = item;
    if (!acc[fcstDate]) acc[fcstDate] = [];
    acc[fcstDate].push(item);
    return acc;
  }, {});
}
