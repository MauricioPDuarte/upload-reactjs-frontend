import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://uploadexample-rocketseat.s3-sa-east-1.amazonaws.com/1eec1a6026c456f38f0d50b4a01f2ef2-Sem%20T%C3%ADtulo-1.png" />
        <div>
          <strong>progile.png</strong>
          <span>64kb <button onClick={() => { }}>Excluir</button></span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: "#7159c1" }
          }}
          strokeWidth={10}
          value={60}
        />

        <a
          href="https://uploadexample-rocketseat.s3-sa-east-1.amazonaws.com/1eec1a6026c456f38f0d50b4a01f2ef2-Sem%20T%C3%ADtulo-1.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

         <MdCheckCircle size={24} color="#78e5d5" />
         <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
