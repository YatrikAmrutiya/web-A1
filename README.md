# Assignment 1

* *Date Created*: 27/05/2023
* *Last Modification Date*: 30/05/2023
* *Hosted URL*: https://yatrik-assignment1-deploy.netlify.app/
* *Git URL*: https://git.cs.dal.ca/amrutiya/csci-5709-assignments/-/tree/main/Assignment1

## Author

Name: Yatrik Amrutiya
Banner Id: B00943349
Email: yt707481@dal.ca 

## Deployment

Deployment platform name: [Netlify](app.netlify.com)
Link to hosted project : https://yatrik-assignment1-deploy.netlify.app/
Steps performed to deploy the applicaion:
* Pushed my code to GitHub
* Created an account on Netlify
* Went to the Netlify dashboard and clicked on "Add new site"
* Chose "Import an existing project" option
* Selected GitHub as the source for my project
* Connected my GitHub account and chose the repository for my React app
* Configured site settings, including build command and publish directory
* Clicked on "Deploy site" to initiate the deployment process
* Monitored the deployment progress through real-time logs and notifications
* Accessed my deployed React app using the provided unique URL

## Built With

* [React.js](https://react.dev/) - The web framework used
* [npm](https://www.npmjs.com/) - Package manager for node.js
* [create-react-app](https://create-react-app.dev/) - Tool for creating React applications
* [nodejs](https://nodejs.org/en) - Runtime used
* [react-router](https://reactrouter.com/) - Routing library for React
* [react-bootstrap](https://react-bootstrap.github.io/) - UI library for React applications


## Sources Used
### CourseCard.js

*Lines 07 -20*

```
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Card.Link href="#"> Link 1</Card.Link>
          <Card.Link href="#"> Link 2</Card.Link>
        </Card.Body>
      </Card>
```

The code above was created by adapting the code in [bootstrap cards](https://react-bootstrap.github.io/components/cards/
) as shown below: 

```
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
```

- The code in [bootstrap cards](https://react-bootstrap.github.io/components/cards/
) is written by the contributors at bootstrap and is properly documented and trustworthy.
- The reason why i used the code provided at the react-bootstrap website is because it allowes me to properly leverage the library. By writting official code, I made sure there were no unintentional and unwanted behaviours in my application. The card provided on the link is exactly what i required.
- I used the example provided at the official documentation and used it to create a custom card of my choice. I modified css, text, and links.


### NavbarComponent.js

*Lines 12 - 25*

```
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ClassMate</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/announcement">Announcements</Nav.Link>
              <Nav.Link eventKey={2} href="/content">
                Content
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

```

The code above was created by adapting the code in [bootstrap navbar](https://react-bootstrap.github.io/components/navbar/) as shown below: 

```
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
```

- The code in [react-bootstrap navbar](https://react-bootstrap.github.io/components/navbar/) is written by the contributors at bootstrap and is properly documented and trustworthy.
- I used the code provided in the bootstrap navbar section to take advantage of community-driven updates, bug fixes, and improvements, ensuring that my modal implementation remained compatible with the most recent version of React-Bootstrap.
- I modified the code to push link buttons to the very end as I imagined in my app. Overall,I added custom text, links, and css.

```
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ClassMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/mapp">Mapping</Nav.Link>
            <Nav.Link href="/approve">Approve</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

```
### Announcement.js

*Lines 8 - 54*

```
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

```
### Content.js
*Lines 10-46*
```
<Accordion className="mt-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div>
            <div>Lecture 1</div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-start">
          <h3>Main topic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="content-container">
          <FontAwesomeIcon icon={faEdit} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faShare} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
      <Accordion.Header>
          <div>
            <div>Lecture 2</div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-start">
          <h3>Main topic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="content-container">
          <FontAwesomeIcon icon={faEdit} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faShare} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
```
The code above was created by adapting the code in [Bootstrap Accordion](https://react-bootstrap.github.io/components/accordion/
) as shown below: 

```
 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

```

- The code in [Bootstrap Accordion](https://react-bootstrap.github.io/components/accordion/) is written by the contributors at bootstrap and is properly documented and trustworthy.
- I used the bootstrap version of accordion because it comes with one of the most elegant designs provided by any library. Also, it is most aligned with my interpretation of the announcement feature in my app.  
- I modified the code to add dates, types along with the name of announcement in its header. Also, i added icons, text (lorem ipsum [1]), custom css in the accordion body as per my requirement.


### Analytics.js
*Lines 72-78*

```

         <Doughnut
            data={gradeDistributionData}
            options={{
              ...chartOptions,
              plugins: { title: { text: "Grade Statistics" } },
            }}
          />

```

The code above was created by adapting the code in [react-chart-js doughnut chart](https://react-chartjs-2.js.org/components/doughnut/
) as shown below: 

```
import { Doughnut } from 'react-chartjs-2';

<Doughnut
  options={...}
  data={...}
  {...props}
/>
```
- The code in [react-chart-js doughnut](https://react-chartjs-2.js.org/components/doughnut/) is written by the contributors at bootstrap and is properly documented and trustworthy.
- In my project, I used the doughnut chart to visually represent and convey data in an understandable format. I was able to create informative and visually appealing doughnut charts that displayed statistics such as students passing/failing and grade distribution by utilizing the React-ChartJS-2 library.
- I modified the code by importing the Doughnut component from react-chartjs-2 and customizing it with specific options and data props to create doughnut charts showcasing students passing/failing statistics and grade distribution statistics in the Analytics component.

### References

[1] “Lorem Ipsum - All the facts - Lipsum generator.” Available: https://www.lipsum.com/. [Accessed: May 30, 2023]


