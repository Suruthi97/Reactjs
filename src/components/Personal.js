
export default function Personal({handleChange, getPersonal,getValidation }) {   

    return (
        <div>
            <div className="row">
                        <div className="col-9">
                            <div className="text-style-lg"><h3>Personal Information</h3></div>
                            <div className="text-style-md">Use a permanent address where you can receive mail.</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg ">
                            First Name
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-md" onChange={handleChange} value={getPersonal.firstName} id="firstName" name="firstName" type="text" />
                            {getValidation.firstName && <div class="alert alert-danger" role="alert">
                            {getValidation.firstName}
                                </div> }
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Last Name
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-md" onChange={handleChange} value={getPersonal.lastName} id="lastName" name="lastName" type="text" />
                            {getValidation.lastName && <div class="alert alert-danger" role="alert">
                            {getValidation.lastName}
                                </div> }
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Email address
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-lg" onChange={handleChange} value={getPersonal.email} id="email" name="email" type="text" />
                            {getValidation.email && <div class="alert alert-danger" role="alert">
                            {getValidation.email}
                                </div> }
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
                                <option className="form-control">United States</option>
                                <option className="form-control">Canada</option>
                                <option className="form-control">Mexico</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Street address
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-lg" onChange={handleChange} value={getPersonal.street} id="street" name="street" type="text" />
                            {getValidation.street && <div class="alert alert-danger" role="alert">
                            {getValidation.street}
                                </div> }
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            City
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-md" onChange={handleChange} value={getPersonal.city} id="city" name="city" type="text" />
                            {getValidation.city && <div class="alert alert-danger" role="alert">
                                {getValidation.city}
                                </div> }
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            State / Province
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-md" onChange={handleChange} value={getPersonal.state} id="state" name="state" type="text" />
                            {getValidation.state && <div class="alert alert-danger" role="alert">
                                {getValidation.state}
                                </div> }
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Zip / Postal code
                        </div>
                        <div className="col-8">
                            <input className="form-control input-width-md" onChange={handleChange} value={getPersonal.postal} id="postal" name="postal" type="text" />
                            {getValidation.postal && <div class="alert alert-danger" role="alert">
                                {getValidation.postal}
                                </div> }
                        </div>
                    </div>           
        </div>
    );
}