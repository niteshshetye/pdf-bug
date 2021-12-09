import React, {useState, useEffect} from 'react'
import FileViewer from 'react-file-viewer';
import axios from 'axios';

// const file = 'https://www.orimi.com/pdf-test.pdf'
const type = 'pdf'

const AnotherWay = () => {
    
    const [pdfUrl, setPdfUrl] = useState('')

    useEffect(() => {
    const fetchPdfUrl = async() => {
      const {data} = await axios('http://localhost:3001/pdf')
      console.log(data[0].url)
      return data[0].url
    }
    setPdfUrl(fetchPdfUrl())
    
  }, [])
    const onError = (e) => {
        console.log(e, 'error occured')
    }
    return (
        <FileViewer
          fileType={type}
          filePath={pdfUrl}
          onError={onError}/>
      );
}

export default AnotherWay
