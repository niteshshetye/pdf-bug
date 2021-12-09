import React, {useState, useEffect} from 'react'

import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfUrl, setPdfUrl] = useState('')
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    useEffect(() => {
      const fetchPdfUrl = async() => {
        const {data} = await axios('http://localhost:3001/image')
        // console.log(data[0].url)
        return data[0].url
      }
      setPdfUrl(fetchPdfUrl())
      
    }, [])


    return (
      <>
        <Document
          file={require('../db.json').pdf[0].url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </>
    );
}

export default Pdf
