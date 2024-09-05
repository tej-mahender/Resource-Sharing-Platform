import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';
import { IoIosSearch } from "react-icons/io";
import FileDisplay from '../filedisplay/FileDisplay';
function SearchBar({ files = [] }) {  
  const [input, setInput] = useState('');
  const filteredFiles = files.filter(file => 
    file.tags.some(tag => tag.toLowerCase().includes(input.toLowerCase()))
  );
  return (
    <div className="search-bar-container">
      <Form className="search-bar">
        <InputGroup className="m-2">
          <InputGroup.Text>
            <IoIosSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search by tags"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
      </Form>
      <div className="file-display-container">
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file, index) => (
            <FileDisplay 
              key={index} 
              driveLink={file.driveLink} 
              fileName={file.fileName} 
              tags={file.tags}
            />
          ))
        ) : (
          <p>No files match your search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;