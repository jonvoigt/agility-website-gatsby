import React from 'react';
import ResponsiveImage from '../components/responsive-image.jsx'
import './FeaturedCaseStudies.scss'
const FeaturedCaseStudies = ({ item }) => {
	let moduleItem = item.customFields;
	//render the case studies
	let caseStudies = moduleItem.caseStudies.map(function (cs) {
		return <FeaturedCaseStudy key={cs.contentID + "-" + item.contentID} item={cs} />
	});
	return (
		<section className="features p-w featured-case-studies">
			<div className="container-my">
				<h2 className="title-component">{moduleItem.title}</h2>
				<div className="case-wrapper">
					<div className="case-studies">
						{caseStudies}
					</div>
				</div>
				{
					moduleItem.primaryButton && moduleItem.primaryButton.href &&
					<a className="btn" href={moduleItem.primaryButton.href} target={moduleItem.primaryButton.target}>{moduleItem.primaryButton.text}</a>
				}
			</div>
		</section>
	);
}

export default FeaturedCaseStudies;


class FeaturedCaseStudy extends React.Component {
	render() {
		const caseStudyItem = this.props.item;
		const caseStudy = caseStudyItem.customFields;
		return (
			<div className="case-item">
				<div className="case-item-inner">
					<a href={'/resources/case-studies/' + caseStudy.uRL}>
						<div className="image">

							<ResponsiveImage img={caseStudy.image}
								breaks={[{ w: 270, max: 640 }, { w: 270, max: 800 }, { w: 270, max: 1190 }]} />
						</div>
						<div className="customer-logo">
							<img src={caseStudy.customerLogo.url} alt={caseStudy.customerLogo.label} />
						</div>
						<div className="content">
							<p>{caseStudy.excerpt}</p>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
