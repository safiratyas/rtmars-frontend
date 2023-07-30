import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ImportPDF from './PDF';

function DokumenLaporan() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  return (
    <Container>
      <div className="card-desc mb-5">
        <p>Laporan Bulanan</p>
        <h3>Ketua Kelompok Dasawisma</h3>
      </div>
      <a href="https://html.spec.whatwg.org/print.pdf">
        Open a pdf file
      </a>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
      {/* <ImportPDF /> */}
    </Container>
  )
}

export default DokumenLaporan;