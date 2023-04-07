function Card(props) {
    return (
        <div className="page1">
            <nav aria-label="Category navigation">
                <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
                    <li className="ds_card2  ds_card--has-hover">
                        <div className="ds_category-item  ds_category-item--card1">
                            <h2>0</h2>
                            <p>Total {props.name}</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Card;