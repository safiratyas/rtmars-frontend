import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Faq.scss";

function Faq() {
  return (
    <Container>
      <div className="faq-desc mb-5">
        <p>FAQ</p>
        <h3>Pertanyaan Yang Sering Diajukan</h3>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Apa persyaratan pengurusan SKTM?</Accordion.Header>
          <Accordion.Body>
            Persyaratan Pengurusan:
            Pengantar RT dan RW, Fotokopi KTP dan KK, Mengisi Pernyataan tidak mampu dari Kelurahan (Materai 10000), Berkas penunjang lainnya untuk SKTM, Surat Kuasa (jika yang bersangkutan tidak bisa datang ke Kelurahan).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Apa persyaratan pengurusan SKCK?</Accordion.Header>
          <Accordion.Body>
            Persyaratan Pengurusan:
            Fotokopi Kartu Tanda Penduduk (KTP) atau Surat Izin Mengemudi (SIM), Fotokopi Kartu Keluarga (KK), Fotokopi Akta Kelahiran/Surat Kenal Lahir/Ijazah Terakhir, Pas foto 4x6 berlatar/background merah sebanyak 6 lembar.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Bagaimana mengetahui adanya kegiatan baru?</Accordion.Header>
          <Accordion.Body>
            Jika terdapat kegiatan/agenda baru akan segera diberitahu melalui notifikasi di pojok kanan atas, sehingga warga mengetahui adanya kegiatan baru.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Bagaimana jika saya memiliki pertanyaan lain?</Accordion.Header>
          <Accordion.Body>
            Jika saudara/i memiliki pertanyaan-pertanyaan lebih lanjut mengenai kegiatan warga, atau hal-hal lain yang bersifat urgensi, saudara/i bisa menuju ke menu Pengurus dibagian atas dan memilih pengurus yang ingin saudara/i lebih lanjut
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Dimana saya bisa memberikan masukan terhadap website?</Accordion.Header>
          <Accordion.Body>
            Jika saudara/i memiliki masukkan atau komentar mengenai website ini, silahkan menghubungi Admin melalui media sosial yang tercantum dibagian paling bawah.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Faq;