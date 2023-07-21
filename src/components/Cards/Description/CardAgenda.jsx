/* eslint-disable react/jsx-no-target-blank */
// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import "./Activity.scss"
import './CardDesc.scss';

function CardAgenda({ agenda }) {
  return (
    <Container className="mb-5">
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Kegiatan - Kegiatan Warga</h3>
      </div>
      <div>
        <Row>
          <Col md={6} style={{ marginTop: "5%", marginBottom: "5%" }}>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-kpldh-1.jpeg'} className="mb-2 swiper-photo" alt="header"
              /></SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-kpldh-2.jpeg'} className="mb-2 swiper-photo" alt="header"
              /></SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-kpldh-3.jpeg'} className="mb-2 swiper-photo" alt="header"
              /></SwiperSlide>
            </Swiper>
          </Col>
          <Col md={6} style={{ marginTop: "5%", marginBottom: "5%" }}>
            <div className="agenda-desc mb-5">
              <h5>Kegiatan KPLDH Bersama Puskesmas Kecamatan Tebet</h5>
              <p>Ketuk Pintu Layani Dengan Hati (KPLDH) adalah upaya pemerintah Provinsi DKI Jakarta yang bertujuan untuk meningkatkan pelayanan kesehatan bagi masyarakat. KPLDH memiliki fungsi menunjang dan membantu dalam melaksanakan kegiatan-kegiatan puskesmas dalam wilayah kerjanya yang belum terjangkau oleh pelayanan kesehatan. </p>
              <a href='https://www.jakarta.go.id/ketuk-pintu-layani-dengan-hati' target="_blank">
                Baca Selengkapnya Disini {''}</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="agenda-desc mb-5">
              <h5>Kegiatan BIAN di Kantor RW</h5>
              <p>BIAN adalah pemberian imunisasi tambahan Campak-Rubela serta melengkapi dosis Imunisasi Polio dan DPT-HB-Hib yang terlewat. Program ini diwujudkan sebagai upaya menutup kesenjangan imunitas anak dengan melakukan hamonisasi kegiatan imunisasi tambahan (campak-rubela) dan imunisasi kejar (OPV, IPV, dan DPT-HB-Hib). </p>
              <a href='https://cimahikota.go.id/pengumuman/detail/2300-ayo!-ikuti-dan-sukseskan-bulan-imunisasi-anak-nasional-(bian)-2022' target="_blank">
                Baca Selengkapnya Disini {''}</a>
            </div>
          </Col>
          <Col md={6}>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-bian-1.jpeg'} className="mb-2 swiper-photo" alt="header"
              /></SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-bian-2.jpeg'} className="mb-2 swiper-photo" alt="header"
              /></SwiperSlide>
            </Swiper>
          </Col>
          <Col md={6} style={{ marginTop: "5%", marginBottom: "5%" }}>
            {agenda && agenda.map((list) => {
              return (
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide><img src={list.foto_kegiatan} className="mb-2 swiper-photo" alt="Foto Kegiatan" /></SwiperSlide>
                  <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-kpldh-2.jpeg'} className="mb-2 swiper-photo" alt="header"
                  /></SwiperSlide>
                  <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/kegiatan-kpldh-3.jpeg'} className="mb-2 swiper-photo" alt="header"
                  /></SwiperSlide>
                </Swiper>
              )
            })}
          </Col>
          <Col md={6} style={{ marginTop: "5%", marginBottom: "5%" }}>
            <div className="agenda-desc mb-5">
              <h5>Kegiatan KPLDH Bersama Puskesmas Kecamatan Tebet</h5>
              <p>Ketuk Pintu Layani Dengan Hati (KPLDH) adalah upaya pemerintah Provinsi DKI Jakarta yang bertujuan untuk meningkatkan pelayanan kesehatan bagi masyarakat. KPLDH memiliki fungsi menunjang dan membantu dalam melaksanakan kegiatan-kegiatan puskesmas dalam wilayah kerjanya yang belum terjangkau oleh pelayanan kesehatan. </p>
              <a href='https://www.jakarta.go.id/ketuk-pintu-layani-dengan-hati' target="_blank">
                Baca Selengkapnya Disini {''}</a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default CardAgenda;