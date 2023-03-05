import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import ferr from "../../assets/ferrx2.png"
import food from "../../assets/foodx2.png"
import ofice from "../../assets/oficex2.png"
import { NavigateButton } from "../navigateButton/NavigateButton";

export const NuestrosServicios = () => {


	return (
		<div className="nuestros_servicios-container">
			<h1>NUESTROS SERVICIOS</h1>

			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				navigation={true}
				pagination={{ clickable: true }}
				spaceBetween={20}
				slidesPerView='auto'
			>
				<SwiperSlide key={'1'}>
					<div className="servicios_container">
						<img src={ferr} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Ferretería</h3>

						<p className="servicios_container_text">loremAute excepteur culpa cupidatat aliquip incididunt veniam fugiat non.Nostrud do proident ea fugiat do. Consectetur enim nulla eu velit laborum veniam in minim consequat do id cupidatat aliquip.</p>

						<NavigateButton route='ferreteria'/>

					</div>
				</SwiperSlide>

				<SwiperSlide key={'2'}>
					<div className="servicios_container">
						<img src={food} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Gastronomía</h3>

						<p className="servicios_container_text">loremAute excepteur culpa cupidatat aliquip incididunt veniam fugiat non.Nostrud do proident ea fugiat do. Consectetur enim nulla eu velit laborum veniam in minim consequat do id cupidatat aliquip.</p>

							<NavigateButton route='gastronomia'/>
					</div>
				</SwiperSlide>

				<SwiperSlide key={'3'}>
					<div className="servicios_container">
						<img src={ofice} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Materiales de Oficina</h3>

						<p className="servicios_container_text">loremAute excepteur culpa cupidatat aliquip incididunt veniam fugiat non.Nostrud do proident ea fugiat do. Consectetur enim nulla eu velit laborum veniam in minim consequat do id cupidatat aliquip.</p>

							<NavigateButton route='mtroficina'/>
					</div>
				</SwiperSlide>
			</Swiper>

		</div>
	);
}
