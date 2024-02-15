import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentAppointments } from "./useRecentAppointments";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useDoctors } from "../doctors/useDoctors";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { appointments, isLoading: isLoading1 } = useRecentAppointments();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { doctors, isLoading: isLoading3 } = useDoctors();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        appointments={appointments}
        confirmedStays={confirmedStays}
        numDays={numDays}
        doctorCount={doctors.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart appointments={appointments} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
