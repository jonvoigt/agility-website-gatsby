import React from 'react';
import { Link } from "gatsby"
import moment from 'moment'
import ResponsiveImage from '../components/responsive-image.jsx'
import { renderHTML } from '../agility/utils'

import "./EventDetails.scss"


const EventDetails = ({ item, dynamicPageItem, page }) => {

	const moduleItem = item.customFields;
	const event = dynamicPageItem.customFields;

	console.log("event", event)

	let externalLink = null;
	let exernalTarget = null;
	if (event.externalLink){
		externalLink = event.externalLink.href;
		exernalTarget = event.externalLink.target;
	}

	return (
		<section className="event-details">
			<div className="container p-w-small">
				<h1 class="title-component">{event.title}</h1>

				<div class="event-date">
					<span>
						{moment(event.date).format("MMM Do, YYYY h:mma")}
					</span>
				</div>


				<div class="event">

					<div className="event-image">
						{
							event.mainImage &&
							<a href={externalLink} target={exernalTarget}><img src={event.mainImage.url + "?w=400&h=350"} alt={event.mainImage.label} /></a>
						}
					</div>
					<div className="event-content">
						<div className="event-type">{ event.eventType.customFields.title }</div>
						<p dangerouslySetInnerHTML={renderHTML(event.textblob)}></p>

						{ event.externalLink &&
							<div class="event-link">
								<a href={externalLink} target={exernalTarget} className="btn">{event.externalLink.text }</a>
							</div>
						}


					</div>

				</div>

				<Link to="/community" class="back d-flex ai-center"><img src="https://static.agilitycms.com/layout/img/ico/gray.svg" alt="" /><span>Back to Event Listing</span></Link>
			</div>
		</section>

	);
}

export default EventDetails;
