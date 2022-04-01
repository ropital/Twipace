import dayjs from "dayjs";

export const formatScheduledStart = (date?: Date) => {
  if (!date) return null;
  const day = dayjs(date);

  let dateStr = "";

  if (day.get("d") === dayjs().get("d")) {
    dateStr += "今日 ";
  } else {
    dateStr += day.format("MM/DD ");
  }

  dateStr += day.format("HH:mm");
  return dateStr;
};
