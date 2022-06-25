import React, { useState } from "react";
import "./Card.css";

const Card = () => {
    const [count, setCount] = useState(0);
    return (
			<div className="card_container">
				<div className="card_subContainer" onClick={() => setCount(count + 1)}>
					<div className="card_textContainer">
						<p className="card_text">
							The Challenge is to write clean concise CSS.
						</p>
                </div>
                <div className="space"></div>
					<div className="card_count">{count}</div>
					<div className="dot_container">
						<div className="card_dot"></div>
					</div>
				</div>
			</div>
		);
};

export default Card;