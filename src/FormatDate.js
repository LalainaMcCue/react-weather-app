export default function FormatDate (props) {
  console.log(props.date);
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = props.date.getDay();
  let dayDate = props.date.getDate();
  let month = props.date.getMonth()+1;
  let year = props.date.getFullYear();
  return (
    `${weekDay[day]} ${month}/${dayDate}/${year}`
  );
}