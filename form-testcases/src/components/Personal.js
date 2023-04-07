
export default function Personal({register, errors, dirtyFields }) {   

    return (
        <div data-testid="personal">
            <div className="row">
                        <div className="col-9">
                            <div className="text-style-lg"><h3>Personal Information</h3></div>
                            <div className="text-style-md">Use a permanent address where you can receive mail.</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            FirstName
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("firstName", {
                                  required: true,
                                  maxLength: 20,
                                  pattern: /^[A-Za-z]+$/i
                                })} 
                                 placeholder="FirstName" aria-describedby="basic-addon1" />
                                 {errors?.firstName?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.firstName?.type === "maxLength" && (<p  className='errors-msg'>First name cannot exceed 20 characters</p>)}
                                  {errors?.firstName?.type === "pattern" && (<p  className='errors-msg'>Alphabetical characters only</p>)}
                        </div>
                    </div>
                    <hr />
                     <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            LastName
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("lastName", {
                                  required: true,
                                  maxLength: 20,
                                  minLength: 2,
                                  pattern: /^[A-Za-z]+$/i
                                })} 
                                 placeholder="LastName" aria-describedby="basic-addon1" />
                                 {errors?.lastName?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.lastName?.type === "maxLength" && (<p  className='errors-msg'>Last name cannot exceed 20 characters</p>)}
                                  {errors?.lastName?.type === "maxLength" && (<p  className='errors-msg'>Not valid lastName</p>)}
                                  {errors?.lastName?.type === "pattern" && (<p  className='errors-msg'>Alphabetical characters only</p>)}
                        </div>
                    </div>
                   <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Email address
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("email", {
                                  required: true, 
                                  maxLength: 50, 
                                  minLength: 4,                               
                                  pattern: /^.+@.+\..+$/i
                                })} 
                                 placeholder="email" aria-describedby="basic-addon1" />
                                 {errors?.email?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.email?.type === "maxLength" && (<p  className='errors-msg'>Too lengthy email id  </p>)}
                                  {errors?.email?.type === "maxLength" && (<p  className='errors-msg'>Not valid email id  </p>)}
                                  {errors?.email?.type === "pattern" && (<p  className='errors-msg'>Not in proper format</p>)}
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
                                {...register("country")} 
                                aria-label="Default select example"
                            >
                                <option className="form-control" value="">United States</option>
                                <option className="form-control" value="A">Canada</option>
                                <option className="form-control" value="B">Mexico</option>
                            </select>
                        </div>
                    </div>
                   <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Street address
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("street", {
                                  required: true,
                                  maxLength: 20,
                                  minLength: 4,
                                  pattern: /^[A-Za-z]+$/i
                                })} 
                                 placeholder="Street" aria-describedby="basic-addon1" />
                                 {errors?.street?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.street?.type === "maxLength" && (<p  className='errors-msg'>street Name cannot exceed 30 characters</p>)}
                                  {errors?.street?.type === "minLength" && (<p  className='errors-msg'>Not valid street name</p>)}
                                  {errors?.street?.type === "pattern" && (<p  className='errors-msg'>Alphabetical characters only</p>)}
                        </div>
                    </div>
                     <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            City
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("city", {
                                  required: true,
                                  maxLength: 20,
                                  minLength: 4,
                                  pattern: /^[A-Za-z]+$/i
                                })} 
                                 placeholder="City" aria-describedby="basic-addon1" />
                                 {errors?.city?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.city?.type === "maxLength" && (<p  className='errors-msg'>city Name cannot exceed 30 characters</p>)}
                                  {errors?.city?.type === "minLength" && (<p  className='errors-msg'>Not valid city name</p>)}
                                  {errors?.city?.type === "pattern" && (<p  className='errors-msg'>Alphabetical characters only</p>)}
                        </div>
                    </div>
                   <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            State / Province
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("state", {
                                  required: true,
                                  maxLength: 20,
                                  minLength: 2,
                                  pattern: /^[A-Za-z]+$/i
                                })} 
                                 placeholder="state" aria-describedby="basic-addon1" />
                                 {errors?.state?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.state?.type === "maxLength" && (<p  className='errors-msg'>state Name cannot exceed 30 characters</p>)}
                                  {errors?.state?.type === "minLength" && (<p  className='errors-msg'>Not valid statename</p>)}
                                  {errors?.state?.type === "pattern" && (<p  className='errors-msg'>Alphabetical characters only</p>)}
                        </div>
                    </div>
                     <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-es-8 text-style-lg">
                            Zip / Postal code
                        </div>
                        <div className="col-8">                                                         
                             <input className="form-control input-width-md" 
                                 {...register("postal", {
                                  required: true,
                                  maxLength: 20,
                                  minLength: 2,
                                  pattern: /^[0-9]+$/i
                                })} 
                                 placeholder="postal" aria-describedby="basic-addon1" />
                                 {errors?.postal?.type === "required" && <p className='errors-msg'>This field is required</p>}
                                  {errors?.postal?.type === "maxLength" && (<p  className='errors-msg'>postal code cannot exceed 8 characters</p>)}
                                  {errors?.postal?.type === "minLength" && (<p  className='errors-msg'>Not valid postal code</p>)}
                                  {errors?.postal?.type === "pattern" && (<p  className='errors-msg'>Numbers only allowed</p>)}
                        </div>
                    </div>           
        </div>
    );
}