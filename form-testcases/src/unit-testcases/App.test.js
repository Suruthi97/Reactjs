import Registration from '../Screens/Registration';
import ProfileDetails from "../Screens/ProfileDetails";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from "../App";
jest.mock("../Screens/Registration");
jest.mock("../Screens/ProfileDetails");
test("Should render Registration on default route", () => {
    Registration.mockImplementation(() => <div>RegistrationMock</div>);
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("RegistrationMock")).toBeInTheDocument();
});
test("Should render ProfileDetails on /profiledetails route", () => {
    ProfileDetails.mockImplementation(() => <div>ProfileDetailsMock</div>);
    render(
        <MemoryRouter initialEntries={["/profiledetails"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText("ProfileDetailsMock")).toBeInTheDocument();
});