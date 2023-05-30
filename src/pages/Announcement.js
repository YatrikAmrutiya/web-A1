import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Announcement() {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <div className="Headers">Accordion</div>
      <Accordion className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div>
              <div>Announcement 1</div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                Announcement Type: Type A
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                Announcement Date: May 1, 2023
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div>
              <div>Announcement 2</div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                Announcement Type: Type B
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                Announcement Date: May 10, 2023
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Announcement;
