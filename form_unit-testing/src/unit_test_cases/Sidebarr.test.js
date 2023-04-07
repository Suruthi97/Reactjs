import { render, screen } from '@testing-library/react';
import Sidebarr from '../components/Sidebarr';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';

describe("Sidebar Test cases", ()=>{
    test('Logo', ()=>{
        render(<Sidebarr/>, {wrapper: BrowserRouter});
        const logo=screen.getByRole("img");
        expect(logo).toHaveAttribute('src','tailwind.png');
        expect(logo).toHaveAttribute('alt','logo');
    });
    test('renders links in Side navbar', async() => {
        render(<Sidebarr/>, {wrapper: BrowserRouter});
        const user = userEvent.setup()
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        await user.click(screen.getByText('Team'))
        expect(screen.getByTestId('teams-link')).toBeInTheDocument()
        await user.click(screen.getByText('Projects'))
        expect(screen.getByTestId('projects-link')).toBeInTheDocument()
        await user.click(screen.getByText('Calendar'))
        expect(screen.getByTestId('calendar-link')).toBeInTheDocument()
        await user.click(screen.getByText('Documents'))
        expect(screen.getByTestId('documents-link')).toBeInTheDocument()
        await user.click(screen.getByText('Reports'))
        expect(screen.getByTestId('reports-link')).toBeInTheDocument()
      });
});