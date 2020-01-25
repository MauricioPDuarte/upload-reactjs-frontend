import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
  <Container>
    {files.map(uploadedFile => (
      <li>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}
              { !!uploadedFile.url && (
                 <button onClick={() => { }}>Excluir</button>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploadedFile && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: "#7159c1" }
              }}
              strokeWidth={10}
              value={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href="https://uploadexample-rocketseat.s3-sa-east-1.amazonaws.com/1eec1a6026c456f38f0d50b4a01f2ef2-Sem%20T%C3%ADtulo-1.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {uploadedFile.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;
