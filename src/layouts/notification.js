const Notification = (props) => {

    return (
        props.notification && 
            <div className="notification">
                <div className="position-relative bg-success text-white rounded shadow-sm py-3 px-4"> {props.notification}</div>
            </div>
    )
}

export default Notification;