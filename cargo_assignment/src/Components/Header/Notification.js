function Notification(props) {
    return (
        <div className="ds_notification-panel__title">
            <div className="notify">
                {props.name}
            </div>
        </div>
    )
}
export default Notification;