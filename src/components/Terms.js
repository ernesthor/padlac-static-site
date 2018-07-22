import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';


export default class Careers extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
            <br />
            <br />
            <h2 className="header center"> Terms and Conditions  </h2>
            <p className="tp-head"> (Updated on 18 July 2018) <br /><br /> </p>

            <p className="tp-head bold">Introduction</p>
            <p className="tp-content">
              These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, PADLAC CONSTRUCTION is accessible at <a href="https://padlac-construction.firebaseapp.com/">https:&#047;&#047;padlac-construction.firebaseapp.com.</a> <br/><br/>
              These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
            </p>
            <br />
            <p className="tp-head bold"> Intellectual Property Rights </p>
            <p className="tp-content">
              Other than the content you own, under these Terms, PADLAC CONSTRUCTION and/or its licensors own all the intellectual property rights and materials contained in this Website. <br/><br/>
              You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
            <br />
            <p className="tp-head bold">Restrictions</p>
            <p className="tp-content">
              You are specifically restricted from all of the following:<br/><br/>
              <ul>
                <li>publishing any Website material in any other media;</li>
                <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                <li>publicly performing and/or showing any Website material;</li>
                <li>using this Website in any way that is or may be damaging to this Website;</li>
                <li>using this Website in any way that impacts user access to this Website;</li>
                <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                <li>using this Website to engage in any advertising or marketing.</li>
              </ul>
              Certain areas of this Website are restricted from being access by you and PADLAC CONSTRUCTION may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
            </p>
            <br />
            <p className="tp-head bold">Your Content</p>
            <p className="tp-content">
            In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website.
            By displaying Your Content, you grant PADLAC CONSTRUCTION a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. <br/><br/>
            Your Content must be your own and must not be invading any third-party’s rights. PADLAC CONSTRUCTION reserves the right to remove any of Your Content from this Website at any time without notice.

            </p>
            <br />
            <p className="tp-head bold">No warranties </p>
            <p className="tp-content">
              This Website is provided "as is," with all faults, and PADLAC CONSTRUCTION express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
            </p>
            <br />
            <p className="tp-head bold">Limitation of liability </p>
            <p className="tp-content">
              In no event shall PADLAC CONSTRUCTION, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  PADLAC CONSTRUCTION, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
            <br />
            <p className="tp-head bold">Indemnification</p>
            <p className="tp-content">
              You hereby indemnify to the fullest extent PADLAC CONSTRUCTION from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
            <br />
            <p className="tp-head bold">Severability </p>
            <p className="tp-content">
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
            <br />
            <p className="tp-head bold">Variation of Terms </p>
            <p className="tp-content">
              PADLAC CONSTRUCTION is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>
            <br />
            <p className="tp-head bold">Assignment </p>
            <p className="tp-content">
              The PADLAC CONSTRUCTION is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>
            <br />
            <p className="tp-head bold">Entire Agreement </p>
            <p className="tp-content">
              These Terms constitute the entire agreement between PADLAC CONSTRUCTION and you in relation to your use of this Website and supersede all prior agreements and understandings.
            </p>
            <br />
            <p className="tp-head bold">Governing Law & Jurisdiction </p>
            <p className="tp-content">
              These Terms will be governed by and interpreted in accordance with the laws of the State of Philippines, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Philippines for the resolution of any disputes.
              <br/><br/>
            </p>
            <br />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
