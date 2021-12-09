// import React from 'react';
import React, { useEffect, useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import DocViewer, {DocViewerRenderers}  from "react-doc-viewer";
// import axios from 'axios'
// import data from './db.json'
import AnotherWay from './component/AnotherWay';
// import Pdf from './component';

function App() {
  // const [pdfUrl, setPdfUrl] = useState('')
  // useEffect(() => {
  //   const fetchPdfUrl = async() => {
  //     const {data} = await axios('http://localhost:3001/pdf')
  //     console.log(data[0].url)
  //     return data[0].url
  //   }
  //   setPdfUrl(fetchPdfUrl())
    
  // }, [])

  // // console.log(data)
  
  // const docs = [
  //   // { uri: 'https://docxtemplater.com/tag-example.docx'},
  //   // { uri: 'https://docxtemplater.com/tag-example.docx'},
  //   // { uri: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  //   // { uri: 'https://www.clickdimensions.com/links/TestPDFfile.pdf'},
  //   { uri: require('./pdf-test.pdf'), fileType: 'application/pdf'},
  //   // { uri: pdfUrl, fileType: 'application/pdf'},
  // ];

  // return <DocViewer 
  //   pluginRenderers={DocViewerRenderers}
  //   documents={docs} 
  // />
  // return <Pdf />
  return <AnotherWay />

}

export default App;
