import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ appointments, confirmedStays, numDays, doctorCount }) {
  // 1.
  const numAppointments = appointments.length;

  // 2.
  const sales = appointments.reduce((acc, cur) => acc + cur.doctors.price, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numOfCons, 0) /
    (numDays * doctorCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="Appointments"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numAppointments}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
