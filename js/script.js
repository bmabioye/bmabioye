document.addEventListener('DOMContentLoaded', function() {
	var nav = document.querySelector('.sidenav'),
		aboutSlide = document.querySelectorAll('.about-carousel'),
		portfolioSlide = document.querySelectorAll('.portfolio-carousel'),
		collapsible = document.querySelectorAll('.collapsible');

	M.Sidenav.init(nav, {});
	M.Carousel.init(aboutSlide, {fullWidth: true, duration: 200});
	M.Carousel.init(portfolioSlide, {duration: 200, numVisible: 10});
	M.Collapsible.init(collapsible, {onOpenStart: handleCollapsibleOpen, onCloseStart: handleCollapsibleClose});

	var carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel'));

	document.querySelectorAll('.carousel-selector').forEach(function(radio) {
		radio.addEventListener('change', function(e) {
			var target = e.target.getAttribute('data-target');
			carouselInstance.set(target)
		})
	})

	document.querySelectorAll('.scroll').forEach(function(anchor) {
		anchor.addEventListener('click', animateScroll);
	});

	var year = document.getElementById('year');
		year.innerHTML = new Date().getFullYear();
	window.addEventListener('scroll', isVisible);
	window.addEventListener('resize', isVisible);
	window.dispatchEvent(( new Event('scroll')));
	showSkill();
	showFavouriteStack();
	showEducation();
	showExperience();
	showPortfolio();
	showInsight();
});

function showFavouriteStack() {
	var stackContainer = document.getElementById('fav-stack');

	var stacks = ['Windows Server', 'MacOS', 'Linux', 'Putty', 'Virtual Box', 'VMware vSphere', 'Microsoft Office', 'Microsoft Visio', 'MYSQL', 'Switch', 'Laravel', 'Codeigniter', 'NaviCat', 'Router','Apache', 'ERP', 'Microsoft Azure', 'QuickBooks', 'Microsoft Remote Desktop', 'AnyDesk', 'BackUP-PC', 'Google Domain', 'GNS3', 'SSH', 'VPN', 'Google App Engine', 'Crypography', 'Digital Ocean', 'FileZilla', 'OmniGraffle', 'Mountain Duck', 'CPanel', 'Google',  'Github'];
	var fragment = document.createDocumentFragment();

	stacks.forEach(function(stack) {
		var div = document.createElement('div');
		div.classList.add('chip');
		div.innerHTML = `<div class="chip" title="${stack}">${stack}</div>`;
		fragment.appendChild(div);
	});
	/*append my favourite stack*/
	stackContainer.appendChild(fragment);
}

function showSkill() {
	var skills = [
		{
			name: 'HelpDesk Support',
			percent: 92,
			colour: 'blue',
			colLenght: 's11',
			fadeDirection: 'fadeInDown',
			delay: '2'
		},
		{
			name: 'Customer Service & Support',
			percent: 85,
			colour: 'red',
			colLenght: 's11',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'Operating Systems',
			percent: 90,
			colour: 'yellow',
			colLenght: 's10',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'Computer Networking',
			percent: 82,
			colour: 'green',
			colLenght: 's9',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
		{
			name: 'Troubleshooting & Repairs',
			percent: 90,
			colour: 'blue-grey',
			colLenght: 's10',
			fadeDirection: 'fadeInDown',
			delay: '2'
		},

		{
			name: 'Centralized Management',
			percent: 75,
			colour: 'light-blue',
			colLenght: 's9',
			fadeDirection: 'moveUp',
			delay: '2'
		},

		{
			name: 'Cloud Computing & Virtualization',
			percent: 75,
			colour: 'deep-orange',
			colLenght: 's12',
			fadeDirection: 'moveUp',
			delay: '2'
		},
		{
			name: 'Software Management & Configuration',
			percent: 80,
			colour: 'indigo',
			colLenght: 's12',
			fadeDirection: 'moveUp',
			delay: '2'
		},
		{
			name: 'Business & Project Management',
			percent: 85,
			colour: 'teal',
			colLenght: 's12',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
			{
			name: 'Cybersecurity',
			percent: 85,
			colour: 'grey',
			colLenght: 's8',
			fadeDirection: 'fadeInUp',
			delay: '2'
		},
	]

	skills.forEach(function(skill) {appendSkillToContainer(skill)})
}

function appendSkillToContainer(skill) {
	var skillContainer = document.getElementById('skills');

	var content = `<div class="col ${skill.colLenght}">
							<h6> ${skill.name} <span class="right">${skill.percent}%</span> </h6>
						</div>
						<div class="progress grey lighten-2" style="height: 7px">
							<div class="determinate ${skill.colour}" style="width: ${skill.percent}%;"></div>
						</div>`;

	var div = document.createElement('div');
	var classes = ['col', 's6', 'mb-4', 'mt-4', 'animatable', `${skill.fadeDirection || 'fadeInUp'}`, `delay-${skill.delay || 2}s`]
		classes.forEach(function(cl) { div.classList.add(cl); })
		
	div.innerHTML = content;
	skillContainer.insertAdjacentElement('beforeend', div);
}

function showInsight() {
	var insightContainer = document.getElementById('insight'),
		insights = [
			{
				text: "Customer Service",
				icon: "icon-check green-text"
			},
			{
				text: "Computer Networking [LAN,VLAN,WAN]",
				icon: "icon-check green-text"
			},
			{
				text: "CCTV & Intercom Telephony",
				icon: "icon-check green-text"
			},
			{
				text: "Operating Systems [Windows, Linux, MacOS, Mobile]",
				icon: "icon-check green-text"
			},
			{
				text: "Troubleshooting & Repair",
				icon: "icon-check green-text"
			},
			{
				text: "Centralized Management",
				icon: "icon-check green-text"
			},
			{
				text: "Software Management & Configuration",
				icon: "icon-check green-text"
			},
			{
				text: "Virtualization & Cloud Computing",
				icon: "icon-check green-text"
			},
			{
				text: "Remote Connection",
				icon: "icon-check green-text"
			},
			{
				text: "ERP & POS Systems Configuration",
				icon: "icon-check green-text"
			}
		]
	var unorderedList = document.createElement('ul');
		unorderedList.classList.add('collection', 'animatable', 'fadeInUp', 'delay-2s');
	var fragment = '';
	Array.prototype.forEach.call(insights, function(dt) {
		fragment += `<li class="collection-item">
						<i class="${dt.icon}"></i>
						<span class="title"><strong>${dt.text}</strong></span>
					</li>`;
	})

	unorderedList.innerHTML = fragment;
	insightContainer.insertAdjacentElement('beforeend', unorderedList);
}

function showEducation() {
	var educationContainer = document.getElementById('education'),
		education = [
			{
				school: "Comptia",
				description: "Comptia A+ Certification",
				icon: "icon-bank circle purple darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "Google IT Support",
				icon: "icon-cloud circle yellow darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "IT Security",
				icon: "icon-file-code circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "Operating Systems",
				icon: "icon-windows circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "System Administration and Infrastructure Services",
				icon: "icon-file-code circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "The Bits & Bytes of Computer Networking",
				icon: "icon-connectdevelop circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Coursera",
				description: "Technical Support Fundamentals",
				icon: "icon-file-code circle light-blue darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Federal University of Technology, Minna",
				description: "BTech - Mathematics & Computer Science",
				icon: "icon-bank circle purple",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "MTN",
				description: "Customer Care Training",
				icon: "icon-code circle yellow darken-4",
				statusClass: "icon-check blue-text" //completed, ongoing
			},
			{
				school: "Prime Solutions",
				description: "Computer Hardware & Repair",
				icon: "icon-server circle red",
				statusClass: "icon-check blue-text" //completed, ongoing
			}
		]
	var unorderedList = document.createElement('ul');
		unorderedList.classList.add('collection', 'animatable', 'fadeInUp', 'delay-2s');
	var fragment = '';
	Array.prototype.forEach.call(education, function(edu) {
		fragment += `<li class="collection-item avatar">
						<i class="${edu.icon}"></i>
						<span class="title"><strong>${edu.description}</strong></span>
						<p>
							${edu.school}
						</p>
						<span class="secondary-content"><i class="${edu.statusClass}"></i></span>
					</li>`;
	})

	unorderedList.innerHTML = fragment;
	educationContainer.insertAdjacentElement('beforeend', unorderedList);
}

function showExperience() {
	var experiencesContainer = document.querySelector('#experience > .collapsible'),
		experiences = [
			{
				position: "Business Management Specialist - Lovelamp Systems [Self-employ] &nbsp;&nbsp;<span class='grey-text'> 2015 - present </span>",
				description: "- Proffer business solutions for small and medium enterprises. <br> - Served customers in a friendly, efficient manner while enusuring their business needs are melt.<br/>- Demostrated respect, friendliness and willingness to help whenever needed",
				icon: "icon-angle-down",
			},
				{
				position: "ICT Solution Consultant - Country Kitchen Ventures [Contract] &nbsp;&nbsp;<span class='grey-text'> 2018 - 2021 </span>",
				description: "- Seamlessly oversaw, managed and cordinated the ICT department<br/> - Procured, managed, and administratered computers and other IT infrastructures<br> - Network monitoring and configuration including routers, VPNs, RDP, etc<br> - Implement WebApp and integrate solutions into business operations<br/>- Ensures smooth running of web application for daily work-flow <br/>- Maintained and reparied computers, other IT equipment and tools to sustained uninterrupted operation.",
				icon: "icon-angle-down",
			},
			{
				position: "System Administrator - XPL Developers [Part-time] &nbsp;&nbsp;<span class='grey-text'> 2017 - 2020 </span>",
				description: "- Setup local and live webserver for webapp deployment <br/>- Managed and configured remote connection <br/> - Configured Google virtual machines <br/> - Setup, deployed digital Ocean droplets<br/>",
				icon: "icon-angle-down",
			},
			{
				position: "Supervisor - Airtel Showroom [Full-time] &nbsp;&nbsp;<span class='grey-text'> 2014 - 2015 </span>",
				description: "- Prepare a variety of different written communications, reports and documents to ensure smooth operations <br/>- Used coordination and planning skills to achieve results according to schedule<br/>- Carried out day-to-day duties accurately and efficiently <br/>- Using Microsoft word and other software tools to create documents and other office reports",
				icon: "icon-angle-down"
			},
			{
				position: "Customer Care Rep. - MTN Trade Partner [Full-time] &nbsp;&nbsp;<span class='grey-text'> 2013 - 2014 </span>",
				description: "- Educate customers on mobile devices usage and operation. <br> - Actively listened to customers' requests, confirming full understanding before addressing concerns<br/>- Resolved customers' issues, improved operations and provided exceptional service<br/>- Create guides and training materials to reiterate lecture information and help colleagues",
				icon: "icon-angle-down",
			}
		]
	var fragment = '';
	experiences.forEach(function(exp) {
		fragment += `<li>
				      <div class="collapsible-header"><i class="${exp.icon}"></i>${exp.position}</div>
				      <div class="collapsible-body"><span>${exp.description}</span></div>
				    </li>`;
	})
	experiencesContainer.innerHTML = fragment;
}

function showPortfolio() {
	var portfolioContainer = document.querySelectorAll('#portfolio .carousel-item');
	var	portfolio = [
			{
				name: "Loan App (owner)",
				description: "Developed a management solution using Microsoft Excel, to manage members’ share and saving, loan disbursement <br> and repayment and members’ weekly performance in union meeting",
				link: "https://github.com/bmabioye"
			},
			{
				name: "Business Management (contributor)",
				description: "A WebApp integrated into various business operations that manage purchase, sales, payments, etc",
				link: "https://www.iblargas.app"
			},
			{
				name: "Inventory & POS App (developer)",
				description: "WebApp develop in Laravel for inventory and point-of-sales management",
				link: "https://www.mayjayservices.app"
			},
			{
				name: "Restaurant Management App (modificator)",
				description: "A multi-store restaurant app desing for qrs services",
				link: "https://cksosweet.com"
			}
		];

	portfolio.forEach(function(pf, index) {
		var fragment = `<div class="card z-depth-${index + 1}" style="width:300px;">
				    		<div class="card-content">
				    			<span class="card-title"><strong>${pf.name}</strong></span>
				    			<p>${pf.description}</p>
				    		</div>
				    		<div class="card-action">
				    			<a href="${pf.link}" class="blue-text" target="_blank">Link to project</a>
				    		</div>
				    	</div>`;
		portfolioContainer[index].innerHTML = fragment;
	})
}

function handleCollapsibleOpen(e) {
	e.firstElementChild.firstElementChild.classList.remove("icon-angle-down");
	e.firstElementChild.firstElementChild.classList.add("icon-angle-up");
}

function handleCollapsibleClose(e) {
	e.firstElementChild.firstElementChild.classList.remove("icon-angle-up");
	e.firstElementChild.firstElementChild.classList.add("icon-angle-down");
	
}


function animateScroll(e) {
	var target = e.currentTarget.getAttribute('href');
		target = target.substring(1); //strip #, '#about' becomes 'about'
	var element = document.getElementById(target);

	if (element && typeof element.scrollIntoView != 'undefined') {
		e.preventDefault();
		element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
	}
}

function isVisible() {
	var animation_elements = document.querySelectorAll('.animatable');
  	animation_elements.forEach(function(element) {
		if (checkVisible(element)) {
	      	element.classList.remove('animatable');
	      	element.classList.add('animated');   
	    } else {
	    	element.classList.remove('animated');
	      	element.classList.add('animatable');	      	
	    }
  	})
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


