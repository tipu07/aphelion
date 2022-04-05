import React from "react";
import Banner from "./section/Banner";
import Serve from "./section/Serve";
import Intro from "./section/Intro";
import Choose from "./section/Choose";
import Assets from "./section/Assets";
import Posts from "./section/Posts";

function Home(props) {
	const home = {
		banner: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "We don't round up. We bill by the minute.",
			para: "Break through the clutter",
			btn_01: "Learn More",
			btn_link_01: "/about",
			btn_02: "Contact us",
			btn_link_02: "/contact",
		},
		serve: {
			heading: "Our ",
			heading_ex: "Services",
			para: "Here are some opportunities with the best companies in the market today. Join our network and we can work together to find you what fits you.",
			block: [
				{
					id: 1,
					src: "/images/web_design.jpg",
					title: "Website Design",
					link: "/services/service-detail",
				},
				{
					id: 2,
					src: "/images/seo.jpg",
					title: "Search Engine Optimization",
					link: "/services/service-detail",
				},
				{
					id: 3,
					src: "/images/ppc.jpg",
					title: "Pay Per Click (PPC) Marketing",
					link: "/services/service-detail",
				},
				{
					id: 4,
					src: "/images/graphic_design.jpg",
					title: "Graphic Design",
					link: "/services/service-detail",
				},
				{
					id: 5,
					src: "/images/social_media_marketing.jpg",
					title: "Social Media Marketing",
					link: "/services/service-detail",
				},
				{
					id: 6,
					src: "/images/email_marketing.jpg",
					title: "Email Marketing",
					link: "/services/service-detail",
				},
			],
		},
		intro: {
			sec_bg: "/images/layer_3.svg",
			heading: "What are ",
			heading_ex: "we doing",
			subtitle: "Hosting opens up a world of opportunity",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.",
			ul: [
				{
					id: 1,
					li: "Full-service electrical layout, design",
				},
				{
					id: 2,
					li: "Wiring and installation/upgrades",
				},
				{
					id: 3,
					li: "Emergency seo solutions (generators)",
				},
				{
					id: 4,
					li: "Virtually any digital needs you have – just ask!",
				},
			],
			btn: "Learn More",
			btn_link: "/about",
			src: "/images/group-young-business-377106.jpg",
		},
		choose: {
			heading: "Why ",
			heading_ex: "choose us?",
			block: [
				{
					id: 1,
					icon: "/images/icon-roller.svg",
					title: "We Research",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis quia veritatis nihil excepturi iure.",
				},
				{
					id: 2,
					icon: "/images/icon-stats-up.svg",
					title: "We Plan",
					para: "Accus antium verita tisdel ectus aliquam itaque illum odit sim ilique num quam dolo rem doloremque impe dit, lauda ntium error!",
				},
				{
					id: 3,
					icon: "/images/icon-blackboard.svg",
					title: "We Execute",
					para: "Optio reiciendis minima sunt debitis ea reprehenderit, ipsa et dolores nihil animi maxime rem labore, debitis modi.",
				},
				{
					id: 4,
					icon: "/images/icon-unlock.svg",
					title: "We Analyze",
					para: "Facere similique quisquam tempora soluta, molestias quis dolorum tempore eum quidem ipsa ratione at commodi porro.",
				},
			],
		},
		assets: {
			sec_bg: "/images/90440-scaled-e1585238886193.jpg",
			heading: "Growing your business and helping with organizing",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		posts: {
			heading: "See ",
			heading_ex: "Our Blogs",
			block: [
				{
					id: 1,
					title: "9 of the best professional biological examples we have ever seen",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "28 February, 2022",
					src: "/images/Depositphotos_201318592_original.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 2,
					title: "Blog SEO: How to optimize the search engines for your blog content",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "07 July, 2021",
					src: "/images/Businesswoman hand working light.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 3,
					title: "Email forwarding tips you must know by 2020",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "19 May 2020",
					src: "/images/digital-transformation-teaser.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
			],
		},
	};
	return (
		<>
			<Banner data={home.banner} />
			<Serve data={home.serve} />
			<Intro data={home.intro} />
			<Choose data={home.choose} />
			<Assets data={home.assets} show={props.popup} />
			<Posts data={home.posts} />
		</>
	);
}

export default Home;
