export default function Notifications({handleFormChange, getNotification }) {
    return (
        <div>
             <div className="row">
                        <div className="col-9">
                            <div className="text-style-lg"><h3 data-testid="notifications">Notifications</h3></div>
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
                                    <input type="checkbox" id="comments" name="comments" value={getNotification.byEmail} onChange={handleFormChange} defaultChecked/>
                                    <label className="push-noti text-style-lg" htmlFor='comments'>
                                        Comments
                                    </label>
                                    <p className="text-style-md">Get notified when someones posts a comment on a posting.</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="candidates" name="candidates" value={getNotification.byEmail} onChange={handleFormChange}/>
                                    <label className="push-noti text-style-lg" htmlFor='candidates'>
                                        Candidates
                                    </label>
                                    <p className="text-style-md">Get notified when a candidate applies for a job.</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="Offers" name="Offers" value={getNotification.byEmail} onChange={handleFormChange}/>
                                    <label className="push-noti text-style-lg" htmlFor='Offers'>
                                        Offers
                                    </label>
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
                                    <input type="radio" id="everything" name="notification" value="everything" onChange={handleFormChange} defaultChecked/>
                                    <label className="push-noti text-style-lg" htmlFor="everything">Everything</label>

                                </div>
                                <div>
                                    <input type="radio" id="sameAsEmail" name="notification" value="sameAsEmail" onChange={handleFormChange}/>
                                    <label className="push-noti text-style-lg" htmlFor="sameAsEmail">Same as email</label>
                                </div>
                                <div>
                                    <input type="radio" id="noPushNotification" name="notification" value="noPushNotification" onChange={handleFormChange}/>
                                    <label className="push-noti text-style-lg" htmlFor="noPushNotification"> No push notifications</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>           
        </div>
    );
}