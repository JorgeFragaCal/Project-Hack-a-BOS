import React from 'react';
import '../css/about.css';

export function AboutUs() {
	return (
		<React.Fragment>
			<section id="about">
				<section id="Company">
					<h2>Company</h2>

					<p>
						When HAB provided us with the project, we took it as a challenge. From then, Our mission is to
						organize the world’s hackathons and make them universally accessible and useful. We included a
						platform that is the standard for assessing developer skills for over 2,000+ companies around
						the world.
					</p>
					<figure>
						<img src="/img/hackabout.jpg" alt="Fotografía de hackathones" />
						<br />
					</figure>
					<p>
						Hackathones was founded by three junior programmers in A Coruña. Our intention is to create a
						technological community in the province and to expand to the whole country, and why not, to the
						whole world. By enabling tech recruiters and hiring managers to objectively evaluate talent at
						every stage of the recruiting process, Hackathone helps companies hire skilled developers and
						innovate faster.
					</p>
					<p>
						Our mission is to organize the world’s hackathons and make them universally accessible and
						useful.
					</p>
					<p>
						Hackathones is a technology hiring platform that is the standard for assessing developer skills
						for over 2,000+ companies around the world. By enabling tech recruiters and hiring managers to
						objectively evaluate talent at every stage of the recruiting process, HackerRank helps companies
						hire skilled developers and innovate faster.
					</p>
				</section>
				<section id="testimonial2">
					<div class="row ">
						<div class="large-12 text-center">
							<h2>Testimonials:</h2>

							<div id="slidy-container">
								<figure id="slidy">
									<img src="/img/testimonial/1" />
									<img src="/img/testimonial/test_sb.png?v1.18b" />
									<img src="/img/testimonial/test_co_sara.png?v1.18b" />
									<img src="/img/testimonial/test_eg.png?v1.18b" />
									<img src="/img/testimonial/test_co_john.png?v1.18b" />

									<img src="/img/testimonial/1" />
								</figure>
							</div>
						</div>
					</div>
				</section>

				<section id="past-partners">
					<div class="row">
						<div class="medium-12 text-center columns">
							<h2>Organizations we've worked with:</h2>
						</div>
					</div>
					<div class="row full-width text-center">
						<div class="keep-together">
							<a href="https://hack-a-bos.com" target="_blank">
								<img src="/img/partners/" alt="Hack a Bos" />
							</a>
							<a href="https://www.zara.com/" target="_blank">
								<img src="/img/partners/" alt="ZARA" />
							</a>
							<a href="https://www.softtek.com/es/" target="_blank">
								<img src="/img/partners/" alt="Softtek" />
							</a>
						</div>
						<div class="keep-together">
							<a href="http://grupooesia.com/en/" target="_blank">
								<img src="/img/partners/" alt="Oesía" />
							</a>
							<a href="https://www.improvingmetrics.com/" target="_blank">
								<img src="/img/partners/" alt="Improving Metrics" />
							</a>
							<a href="https://www.altia.es/es/altia" target="_blank">
								<img src="/img/partners/" alt="altia" />
							</a>
						</div>
					</div>
				</section>

				<section id="careers">
					<h2>Careers</h2>
					<p>
						We currently have no open positions but hey, we are waiting for you. If you have passion and
						knowledge in software development, please send us your email for future positions.
					</p>
					<div>
						<button type="button" id="button-orange">
							<a href="mailto:hackathones@hackathones.com">Thanks</a>
						</button>
					</div>
				</section>
				<section id="Team">
					<h2>Our team</h2>
				</section>
			</section>
		</React.Fragment>
	);
}
