const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-secondery" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}

export default Loader;