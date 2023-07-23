import { Link } from "react-router-dom";
import { Container, Form } from 'react-bootstrap';
import './CardDesc.scss';

function CardAdminError() {
  return (
    <Container style={{ paddingTop: "5%" }}>
      <div className="text-center mb-5">
        <h3 style={{ fontWeight: 'bold', marginTop: '5%' }}>Anda Harus Login Sebelum Mengakses Halaman Ini!</h3>
        <img src={process.env.PUBLIC_URL + '/images/unauthorized.png'} className="mx-auto" alt="list" />
        <Form.Group className="mx-auto mt-3">
          <Form.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Kembali ke Beranda? </Form.Text>
          <Link to="/dashboard/admin" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#06A788', fontWeight: 'bold', fontSize: '20px' }}>Klik Disini</Form.Text></Link>
        </Form.Group>
      </div>
    </Container>
  )
}

export default CardAdminError;