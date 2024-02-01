import moment from "moment";

export default function getPostedTime(timestamp: string) {
  const currentTime = moment();
  const targetTime = moment(timestamp);

  const duration = moment.duration(currentTime.diff(targetTime));

  const days = duration.asDays();
  const weeks = duration.asWeeks();
  const years = duration.asYears();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  let dateString = "";

  if (Math.floor(days) > 0) {
    dateString += `${Math.floor(days)}d`;
  } else if (Math.floor(weeks) > 0) {
    dateString += `${Math.floor(weeks)}w`;
  } else if (Math.floor(years) > 0) {
    dateString += `${Math.floor(years)}y`;
  } else if (hours > 0) {
    dateString += `${hours}h`;
  } else if (minutes > 0) {
    dateString += `${minutes}m`;
  } else if (seconds > 0) {
    dateString += `${seconds}s`;
  }

  return dateString;
}
