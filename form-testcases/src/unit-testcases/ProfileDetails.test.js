import ProfileDetails from "../Screens/ProfileDetails";
import { render, screen } from '@testing-library/react';
test("Should render table content", () => {
    render(<ProfileDetails />);
    expect(screen.getByText('S.No')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('FirstName')).toBeInTheDocument();
    expect(screen.getByText('LastName')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('Street')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Postal')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
});