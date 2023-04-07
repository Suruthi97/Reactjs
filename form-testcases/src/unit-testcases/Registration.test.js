import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Registration from '../Screens/Registration';
describe("Form Test cases", () => {
    render(<Registration />);
    const buttonEl = screen.getByTestId("savebutton");
    const userInputEl = screen.getByPlaceholderText(/www.example.com/i);
    const aboutInputEl = screen.getByPlaceholderText(/type something about yourself/i);
    const firstNameInputEl = screen.getByPlaceholderText("FirstName");
    const lastNameInputEl = screen.getByPlaceholderText("LastName");
    const emailInputEl = screen.getByPlaceholderText("email");
    const streetInputEl = screen.getByPlaceholderText("Street");
    const cityInputEl = screen.getByPlaceholderText("City");
    const stateInputEl = screen.getByPlaceholderText("state");
    const postalInputEl = screen.getByPlaceholderText("postal");
    const countryInputEl = screen.getByText(/united states/i);
    const countryInputEl1 = screen.getByText(/canada/i);
    const countryInputEl2 = screen.getByText(/mexico/i);
    const commentInputEl = screen.getByTestId("comments");
    const candidatesInputEl = screen.getByTestId("candidates");
    const offersInputEl = screen.getByTestId("offers");
    const InputEl1 = screen.getByTestId("everything");
    const InputEl2 = screen.getByTestId("sameasemail");
    const InputEl3 = screen.getByTestId("nonotification");
    test('renders user inputs in the registration form', () => {
        expect(userInputEl).toBeInTheDocument;
        expect(aboutInputEl).toBeInTheDocument;
        expect(firstNameInputEl).toBeInTheDocument;
        expect(lastNameInputEl).toBeInTheDocument;
        expect(emailInputEl).toBeInTheDocument;
        expect(streetInputEl).toBeInTheDocument;
        expect(cityInputEl).toBeInTheDocument;
        expect(stateInputEl).toBeInTheDocument;
        expect(postalInputEl).toBeInTheDocument;
        expect(countryInputEl).toBeInTheDocument;
        expect(commentInputEl).toBeInTheDocument;
        expect(candidatesInputEl).toBeInTheDocument;
        expect(offersInputEl).toBeInTheDocument;
        expect(commentInputEl).toBeChecked;
        expect(candidatesInputEl).not.toBeChecked();
        expect(offersInputEl).not.toBeChecked();
        expect(InputEl1).toBeInTheDocument;
        expect(InputEl2).toBeInTheDocument;
        expect(InputEl3).toBeInTheDocument;
        expect(InputEl1).toBeChecked;
        expect(InputEl2).not.toBeChecked;
        expect(InputEl3).not.toBeChecked;
    });
    test("expect error message on empty fields", () => {
        const { findByText } = render(<Registration />);
        expect(userInputEl.value).toBe("");
        expect(aboutInputEl.value).toBe("");
        fireEvent.click(buttonEl);
        findByText("This field is required");
    })
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
    test("render components in document", () => {
        const { getAllByTestId } = render(<Registration />);
        const childElement1 = getAllByTestId("profile");
        expect(childElement1).toBeTruthy();
        const childElement2 = getAllByTestId("personal");
        expect(childElement2).toBeTruthy();
        const childElement3 = getAllByTestId("notifications");
        expect(childElement3).toBeTruthy();
        expect(buttonEl).toBeInTheDocument;
    });
    test("button should not be disabled when inputs exist", () => {
        const onSubmit = jest.fn();
        render(<Registration onSubmit={onSubmit} />)
        fireEvent.change(userInputEl, { target: { value: "testValue" } });
        fireEvent.change(aboutInputEl, { target: { value: "testValue" } });
        fireEvent.change(firstNameInputEl, { target: { value: "testValue" } });
        fireEvent.change(lastNameInputEl, { target: { value: "testValue" } });
        fireEvent.change(emailInputEl, { target: { value: "test@gmail.com" } });
        fireEvent.change(streetInputEl, { target: { value: "testValue" } });
        fireEvent.change(cityInputEl, { target: { value: "testValue" } });
        fireEvent.change(stateInputEl, { target: { value: "testValue" } });
        fireEvent.change(postalInputEl, { target: { value: "testValue" } });
        userEvent.click(buttonEl)
        expect(onSubmit).toHaveBeenCalled;
    }); //save button
})