import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';



export default class Privacy extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
            <br />
            <br />
            <h2 className="header center"> Privacy Policy </h2>
            <p className="tp-head"> (Updated on 18 July 2018) <br /><br /> </p>
            <p className="tp-content">
              PADLAC CONSTRUCTION ("us", "we", or "our") operates the <a href="https://padlac-construction.firebaseapp.com/">https:&#047;&#047;padlac-construction.firebaseapp.com website </a> (the "Service").<br /><br />
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br /><br />
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
              accessible from <a href="https://padlac-construction.firebaseapp.com/">https:&#047;&#047;padlac-construction.firebaseapp.com </a>
            </p>
            <br />
            <p className="tp-head bold">Information Collection and Use</p>
            <p className="tp-content">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <br />
            <p className="tp-head bold"> Types of Data Collected </p>
            <br />
            <p className="tp-sub bold"> Personal Data </p>
            <p className="tp-content">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
              Personally, identifiable information may include, but is not limited to:
              <ul>
                <li> Email address </li>
                <li> First name and last name </li>
                <li> Phone number </li>
                <li> (Address, State, Province, ZIP/Postal code, City) </li>
                <li> Cookies and Usage Data </li>
              </ul>
            </p>
            <br />
            <p className="tp-sub bold"> Usage Data </p>
            <p className="tp-content">
              We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer&#039;s
              Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages,
              unique device identifiers and other diagnostic data.
            </p>
            <br />
            <p className="tp-sub bold">Cookies Data</p>
            <p className="tp-content">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. <br /> <br />
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
              Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. <br /> <br />
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <br />
            <p className="tp-sub bold">Examples of Cookies we use:</p>
            <p className="tp-content">
              <ul>
                <li> Session Cookies. We use Session Cookies to operate our Service. </li>
                <li> Preference Cookies. We use Preference Cookies to remember your preferences and various settings. </li>
                <li> Security Cookies. We use Security Cookies for security purposes. </li>
              </ul>
            </p>

            <br />
            <p className="tp-head bold">Use of Data</p>
            <p className="tp-content">
              PADLAC CONSTRUCTION uses the collected data for various purposes: <br /><br />
              <ul>
                <li> To provide and maintain the services</li>
                <li> To notify you about changes to our services </li>
                <li> To allow you to participate in interactive features of our Service when you choose to do so </li>
                <li> To provide customer care and support </li>
                <li> To provide analysis or valuable information so that we can improve the Service </li>
                <li> To monitor the usage of the Service </li>
                <li> To detect, prevent and address technical issues </li>
              </ul>
            </p>
            <br />
            <p className="tp-head bold"> Transfer of Data </p>
            <p className="tp-content">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. <br /><br />
              If you are located outside Philippines and choose to provide information to us, please note that we transfer the data, including Personal Data, to Philippines and process it there. <br /><br />
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. <br /><br />
              PADLAC CONSTRUCTION will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </p>
            <br />
            <p className="tp-head bold">Disclosure of Data</p>
            <p className="tp-content">
              Legal Requirements <br /><br />
              PADLAC CONSTRUCTION may disclose your Personal Data in the good faith belief that such action is necessary to: <br /><br />
              <ul>
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of PADLAC CONSTRUCTION</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </p>
            <br />
            <p className="tp-head bold"> Security of Data </p>
            <p className="tp-content">
              The security of your data is important to us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <br />
            <p className="tp-head bold">Service Providers</p>
            <p className="tp-content">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. <br/><br/>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <br />
            <p className="tp-head bold">Links to Other Sites</p>
            <p className="tp-content">
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&#039;s site. We strongly advise you to review the Privacy Policy of every site you visit. <br/><br/>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
            </p>
            <br />
            <p className="tp-head bold">Changes to This Privacy Policy</p>
            <p className="tp-content">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. <br/><br/>
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy. <br/><br/>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <br />
            <p className="tp-head bold"> Contact Us </p>
            <p className="tp-content">
              If you have any questions about this Privacy Policy, please contact us. <br/><br/>
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
