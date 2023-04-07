import '../Styles/Profile.css';

export default function Notifications({register, errors, dirtyFields }) {
    return (
        <div data-testid="notifications">
             <div className="row">
                        <div className="col-9">
                            <div className="text-style-lg"><h3>Notifications</h3></div>
                            <div className="text-style-md">We'll always let you know about important changes, but you pick what else you want to hear about.</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4 text-style-lg">
                            By Email
                        </div>
                        <div className="col-8">
                            <fieldset>
                                <div>
                                    <input {...register("byEmail")} type="checkbox" value="comments" defaultChecked/>                                    
                                    <label className="push-noti text-style-lg" data-testid="comments">Comments</label>
                                    <p className="text-style-md">Get notified when someones posts a comment on a posting.</p>
                                </div>
                                <div>
                                    <input {...register("byEmail")} type="checkbox" value="candidates" />
                                    <label className="push-noti text-style-lg" data-testid="candidates">Candidates</label>
                                    <p className="text-style-md">Get notified when a candidate applies for a job.</p>
                                </div>
                                <div>
                                    <input {...register("byEmail")} type="checkbox" value="Offers" />
                                    <label className="push-noti text-style-lg" data-testid="offers">Offers</label>
                                    <p className="text-style-md">Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4 text-style-lg">
                            Push Notifications
                        </div>
                        <div className="col-8">
                            <div>
                                <p>These are delivered via SMS to your mobile phone.</p>
                            </div>
                            <fieldset>
                                <div>
                                    <input {...register("pushNotif")} type="radio" value="everything" defaultChecked/>
                                    <label className="push-noti text-style-lg" htmlFor="everything" data-testid="everything">Everything</label>
                                </div>
                                <div>
                                    <input {...register("pushNotif")} type="radio" value="sameAsEmail" />
                                    <label className="push-noti text-style-lg" htmlFor="sameAsEmail" data-testid="sameasemail">Same as email</label>
                                </div>
                                <div>
                                    <input {...register("pushNotif")} type="radio" value="noPushNotification" />
                                    <label className="push-noti text-style-lg" htmlFor="noPushNotification" data-testid="nonotification"> No push notifications</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>           
        </div>
    );
}