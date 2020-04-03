import React from 'react';
import { Link } from "gatsby"
import moment from 'moment'
import ResponsiveImage from '../components/responsive-image.jsx'
import { renderHTML } from '../agility/utils'
import PostTags from "../components/PostTags.jsx"

import "./RichTextArea.scss"
import "./PostDetails.scss"


const PostDetails = ({ item, dynamicPageItem, page }) => {

	item = item.customFields;
	const post = dynamicPageItem.customFields;
	const author = post.author.customFields;

	return (
		<section className="blog-post-details">
			<div className="">
				<div className="container p-w-small rich-text">
					<h1 className="h1">{post.title}</h1>
					{post.subTitle &&
						<h4 className="h4">{post.subTitle}</h4>
					}
					<PostTags post={post} />

					<div className="meta">
						<div className="author">
							<div className="author-image">
								<img src={author.image ? author.image.url + '?w=100' : "https://static.agilitycms.com/authors/blank-head-profile-pic.jpg?w=100"} alt={author.title} />
							</div>
							<h5 className="h5">{author.title}</h5>
						</div>
						<span className="date">{moment(post.date).format("LL")}</span>
					</div>



					{post.postImage &&
						<div className="image">
							<ResponsiveImage img={post.postImage}
								breaks={[{ w: 640, max: 640 }, { w: 780, max: 800 }, { w: 1200, max: 1920 }]} />
						</div>
					}

					<div className="post-content" dangerouslySetInnerHTML={renderHTML(post.textblob)}></div>




					{
						item.backButton && item.backButton.text && item.backButton.href &&
						<Link to={item.backButton.href} className="back d-flex ai-center"><img src="https://static.agilitycms.com/layout/img/ico/gray.svg" alt="" /><span>{item.backButton.text}</span></Link>
					}
				</div>


			</div>
		</section>

	);
}

export default PostDetails;
