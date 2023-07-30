import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Laporan from "./Document";

function ImportPDF() {
  return (
    <>
      <h1>TEST</h1>
      <PDFDownloadLink document={<Laporan />} fileName="laporan_bulanan_april_2023.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </>
  )
}
export default ImportPDF;