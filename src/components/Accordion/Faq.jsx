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
          <Accordion.Header>Surat Keterangan Tidak Mampu</Accordion.Header>
          <Accordion.Body>
            Persyaratan Pengurusan:
            Pengantar RT dan RW, Fotokopi KTP dan KK, Mengisi Pernyataan tidak mampu dari Kelurahan (Materai 10000), Berkas penunjang lainnya untuk SKTM, Surat Kuasa (jika yang bersangkutan tidak bisa datang ke Kelurahan).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Faq;