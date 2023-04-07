import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Registration from '../Screens/Registration';
import { onSubmitHandler } from '../Screens/Registration';
describe("Form Test cases", () => {
    render(<Registration />);
    const buttonEl = screen.getByTestId("savebutton");
    const userInputEl = screen.getByPlaceholderText(/www.example.com/i);
    const aboutInputEl = screen.getByPlaceholderText(/you@example.com/i);
    const firstNameInputEl = screen.getByTestId("firstName");
    const lastNameInputEl = screen.getByTestId("lastName");
    const emailInputEl = screen.getByTestId("email");
    const streetInputEl = screen.getByTestId("street");
    const cityInputEl = screen.getByTestId("city");
    const stateInputEl = screen.getByTestId("state");
    const postalInputEl = screen.getByTestId("postal");
    const countryInputEl = screen.getByText(/united states/i);
    const countryInputEl1 = screen.getByText(/canada/i);
    const countryInputEl2 = screen.getByText(/mexico/i);
    const commentInputEl = screen.getByLabelText(/comments/i);
    const candidatesInputEl = screen.getByLabelText(/candidates/i);
    const offersInputEl = screen.getByLabelText(/offers/i);
    const InputEl1 = screen.getByLabelText(/Everything/i);
    const InputEl2 = screen.getByLabelText(/Same as email/i);
    const InputEl3 = screen.getByLabelText(/No push notifications/i);
    test("render components in document", () => {
        const { getAllByTestId } = render(<Registration />);
        const childElement1 = getAllByTestId("profile");
        expect(childElement1).toBeTruthy();
        const childElement2 = getAllByTestId("personal");
        expect(childElement2).toBeTruthy();
        const childElement3 = getAllByTestId("notifications");
        expect(childElement3).toBeTruthy();
        expect(buttonEl).toBeInTheDocument();
        expect(buttonEl).toBeDisabled();
    });
    test("button should not be disabled when inputs exist", () => {
        fireEvent.change(userInputEl, { target: { value: "testValue" } });
        fireEvent.change(aboutInputEl, { target: { value: "testValue" } });
        fireEvent.change(firstNameInputEl, { target: { value: "testValue" } });
        fireEvent.change(lastNameInputEl, { target: { value: "testValue" } });
        fireEvent.change(emailInputEl, { target: { value: "testValue" } });
        fireEvent.change(streetInputEl, { target: { value: "testValue" } });
        fireEvent.change(cityInputEl, { target: { value: "testValue" } });
        fireEvent.change(stateInputEl, { target: { value: "testValue" } });
        fireEvent.change(postalInputEl, { target: { value: "testValue" } });
        expect(buttonEl).not.toBeDisabled;
    }); //save button
    test('renders user inputs in the registration form', () => {
        expect(userInputEl).toBeInTheDocument;
        expect(aboutInputEl).toBeInTheDocument;
        expect(firstNameInputEl).toBeInTheDocument;
        expect(lastNameInputEl).toBeInTheDocument;
        expect(emailInputEl).toBeInTheDocument;
        expect(emailInputEl).toHaveAttribute("type", "email");
        expect(streetInputEl).toBeInTheDocument;
        expect(cityInputEl).toBeInTheDocument;
        expect(stateInputEl).toBeInTheDocument;
        expect(postalInputEl).toBeInTheDocument;
        expect(countryInputEl).toBeInTheDocument;
        expect(commentInputEl).toBeInTheDocument;
        expect(candidatesInputEl).toBeInTheDocument;
        expect(offersInputEl).toBeInTheDocument;
        expect(commentInputEl).toBeChecked();
        expect(candidatesInputEl).not.toBeChecked();
        expect(offersInputEl).not.toBeChecked();
        expect(InputEl1).toBeInTheDocument;
        expect(InputEl2).toBeInTheDocument;
        expect(InputEl3).toBeInTheDocument;
        expect(InputEl1).toBeChecked;
        expect(InputEl2).not.toBeChecked;
        expect(InputEl3).not.toBeChecked;
    });
    test("user input onchange", () => {
        fireEvent.change(userInputEl, { target: { value: "testValue" } });
        expect(userInputEl.value).toBe("testValue");
        fireEvent.change(aboutInputEl, { target: { value: "testValue" } });
        expect(aboutInputEl.value).toBe("testValue");
        fireEvent.change(firstNameInputEl, { target: { value: "testValue" } });
        expect(firstNameInputEl.value).toBe('testValue');
        fireEvent.change(lastNameInputEl, { target: { value: 'testValue' } });
        expect(lastNameInputEl.value).toBe('testValue');
        fireEvent.change(emailInputEl, { target: { value: 'testValue' } });
        expect(emailInputEl.value).toBe('testValue');
        fireEvent.change(streetInputEl, { target: { value: 'testValue' } });
        expect(streetInputEl.value).toBe('testValue');
        fireEvent.change(cityInputEl, { target: { value: 'testValue' } });
        expect(cityInputEl.value).toBe('testValue');
        fireEvent.change(stateInputEl, { target: { value: 'testValue' } });
        expect(stateInputEl.value).toBe('testValue');
        fireEvent.change(postalInputEl, { target: { value: 'testValue' } });
        expect(postalInputEl.value).toBe('testValue');
        fireEvent.change(countryInputEl, { target: { value: countryInputEl } });
        expect(countryInputEl).toBeInTheDocument;
        fireEvent.change(countryInputEl, { target: { value: countryInputEl1 } });
        expect(countryInputEl1).toBeInTheDocument;
        fireEvent.change(countryInputEl, { target: { value: countryInputEl2 } });
        expect(countryInputEl2).toBeInTheDocument;
    })
    test("uncheck checkboxes", () => {
        userEvent.click(commentInputEl);
        expect(commentInputEl).not.toBeChecked;
        userEvent.click(candidatesInputEl);
        expect(candidatesInputEl).toBeChecked;
        userEvent.click(offersInputEl);
        expect(offersInputEl).toBeChecked;
    }); //by email checkbox
    test("push notification labels with option2 checked", () => {
        userEvent.click(InputEl2);
        expect(InputEl1).not.toBeChecked;
        expect(InputEl3).not.toBeChecked;
        expect(InputEl2).toBeChecked;
    }); //push notifications radio buttons
    test("push notification labels with option3 checked", () => {
        userEvent.click(InputEl3);
        expect(InputEl1).not.toBeChecked;
        expect(InputEl2).not.toBeChecked;
        expect(InputEl3).toBeChecked;
    }); //push notifications radio buttons
})