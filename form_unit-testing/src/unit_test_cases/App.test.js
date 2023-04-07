import Dashboardcontent from '../Screens/Dashboardcontent';
import Sidebarr from '../components/Sidebarr';
import Topnavv from '../components/Topnavv';
import Teams from '../Screens/Teams';
import Projects from '../Screens/Projects';
import Documents from '../Screens/Documents';
import Reports from '../Screens/Reports';
import Calendar from '../Screens/Calendar';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from "../App";
jest.mock("../Screens/Dashboardcontent");
jest.mock("../components/Sidebarr");
jest.mock("../components/Topnavv");
jest.mock("../Screens/Teams");
jest.mock("../Screens/Projects");
jest.mock("../Screens/Documents");
jest.mock("../Screens/Reports");
jest.mock("../Screens/Calendar");
test("Should render Side navbar, Top navbar and Dashboard on default route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Dashboardcontent.mockImplementation(() => <div>DashboardcontentMock</div>);
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("DashboardcontentMock")).toBeInTheDocument();
});
test("Should render Side navbar, Top navbar and Teams on /teams route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Teams.mockImplementation(() => <div>TeamsMock</div>);
    render(
        <MemoryRouter initialEntries={["/teams"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("TeamsMock")).toBeInTheDocument();
});
test("Should render Side navbar, Top navbar and Projects on /projects route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Projects.mockImplementation(() => <div>ProjectsMock</div>);
    render(
        <MemoryRouter initialEntries={["/projects"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("ProjectsMock")).toBeInTheDocument();
});
test("Should render Side navbar, Top navbar and Documents on /documents route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Documents.mockImplementation(() => <div>DocumentsMock</div>);
    render(
        <MemoryRouter initialEntries={["/documents"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("DocumentsMock")).toBeInTheDocument();
});
test("Should render Side navbar, Top navbar and Reports on /reports route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Reports.mockImplementation(() => <div>ReportsMock</div>);
    render(
        <MemoryRouter initialEntries={["/reports"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("ReportsMock")).toBeInTheDocument();
});
test("Should render Side navbar, Top navbar and Calendar on /calendar route", () => {
    Sidebarr.mockImplementation(() => <div>SidebarrMock</div>);
    Topnavv.mockImplementation(() => <div>TopnavvMock</div>);
    Calendar.mockImplementation(() => <div>CalendarMock</div>);
    render(
        <MemoryRouter initialEntries={["/calendar"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("SidebarrMock")).toBeInTheDocument();
    expect(screen.getByText("TopnavvMock")).toBeInTheDocument();
    expect(screen.getByText("CalendarMock")).toBeInTheDocument();
});