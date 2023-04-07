import { useState } from 'react';


export default function Personal({ handleChange, getPersonal }) {
    const countryList = ["United States", "Canada", "Mexico"];
    const listItems = countryList.map((country, index) =>
        <option key={index}>{country}</option>
    );
    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <div className="text-style-lg"><h3 data-testid="personal">Personal Information</h3></div>
                    <div className="text-style-md">Use a permanent address where you can receive mail.</div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg ">
                    First Name
                </div>
                <div className="col-8">
                    <input data-testid="firstName" className="form-control input-width-md" onChange={handleChange} value={getPersonal.firstName} id="firstName" name="firstName" type="text" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Last Name
                </div>
                <div className="col-8">
                    <input data-testid="lastName" className="form-control input-width-md" onChange={handleChange} value={getPersonal.lastName} id="lastName" name="lastName" type="text" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Email address
                </div>
                <div className="col-8">
                    <input data-testid="email" className="form-control input-width-lg" onChange={handleChange} value={getPersonal.email} id="email" name="email" type="email" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Country
                </div>
                <div className="col-8">
                    <select
                        className="form-select form-control input-width-md"
                        onChange={handleChange}
                        value={getPersonal.country}
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        aria-label="Default select example"
                    >
                        {listItems}
                    </select>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Street address
                </div>
                <div className="col-8">
                    <input data-testid="street" className="form-control input-width-lg" onChange={handleChange} value={getPersonal.street} id="street" name="street" type="text" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    City
                </div>
                <div className="col-8">
                    <input data-testid="city" className="form-control input-width-md" onChange={handleChange} value={getPersonal.city} id="city" name="city" type="text" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    State / Province
                </div>
                <div className="col-8">
                    <input data-testid="state" className="form-control input-width-md" onChange={handleChange} value={getPersonal.state} id="state" name="state" type="text" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                    Zip / Postal code
                </div>
                <div className="col-8">
                    <input data-testid="postal" className="form-control input-width-md" onChange={handleChange} value={getPersonal.postal} id="postal" name="postal" type="text" />
                </div>
            </div>

        </div>
    );
}