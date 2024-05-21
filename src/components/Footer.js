import React from 'react';
import './footerStyles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-main'>
      <hr className='container' />
      <footer className='text-center text-lg-start text-muted'>
        <section className='footer-top'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <Link style={{ textDecoration: 'none' }} to="/Services"><h6 className='text-uppercase fw-bold mb-4 heading-txt'>Our Services</h6></Link>
                <p>
                  <Link to='/Services/Enterprise' className='text-decoration-none text-dark font-weight-bold'>
                    Enterprise Software Development
                  </Link>
                </p>
                <p>
                  <Link to='/Services/Linkedpos' className='text-decoration-none text-dark font-weight-bold'>
                    Linked POS Management System
                  </Link>
                </p>
                <p>
                  <Link to='/Services/Social-Media-Marketing' className='text-decoration-none text-dark font-weight-bold'>
                    Social Media Marketing
                  </Link>
                </p>
                <p>
                  <Link to='/Services/Digital-Marketing' className='text-decoration-none text-dark font-weight-bold'>
                    Digital Marketing
                  </Link>
                </p>
                <p>
                  <Link to='/Services/Product-Engineering' className='text-decoration-none text-dark font-weight-bold'>
                    Product Engineering
                  </Link>
                </p>
                <p>
                  <Link to='/Services/MVP-Development' className='text-decoration-none text-dark font-weight-bold'>
                    MVP Development
                  </Link>
                </p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <Link style={{ textDecoration: 'none' }} to="/Technologies"><h6 className='text-uppercase fw-bold mb-4 heading-txt'>Technologies</h6></Link>
                <p>
                  <Link to='/Technologies/Odoo' className='text-decoration-none text-dark font-weight-bold'>
                    Odoo
                  </Link>
                </p>
                <p>
                  <Link to='/Technologies/ERPNext' className='text-decoration-none text-dark font-weight-bold'>
                    ERPNext
                  </Link>
                </p>
                <p>
                  <Link to='/Technologies/Linked-POS' className='text-decoration-none text-dark font-weight-bold'>
                    Linked POS
                  </Link>
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <Link style={{ textDecoration: 'none' }} to="/Company"><h6 className='text-uppercase fw-bold mb-4 heading-txt'>Company</h6></Link>
                <p>
                  <Link to='/Company/AboutUs' className='text-decoration-none text-dark font-weight-bold'>
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to='/Company/OurTeam' className='text-decoration-none text-dark font-weight-bold'>
                    Our Team
                  </Link>
                </p>
                <p>
                  <Link to='/Company/Careers' className='text-decoration-none text-dark font-weight-bold'>
                    Careers
                  </Link>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <Link style={{ textDecoration: 'none' }} to="/Contact"><h6 className='text-uppercase fw-bold mb-4 heading-txt'>Contact</h6></Link>
                <p className='mb-2'>
                <FontAwesomeIcon icon={faHome} className='me-2' aria-hidden='true' /> Johar Town, Lahore, Pakistan
                </p>
                <p className='mb-2'>
                <FontAwesomeIcon icon={faEnvelope} className='me-2' aria-hidden='true' /> info@example.com
                </p>
                <p className='mb-2'>
                <FontAwesomeIcon icon={faPhone} className='me-2' aria-hidden='true' /> +01 234 567 88
                </p>
                <p className='mb-0'>
                <FontAwesomeIcon icon={faFax} className='me-2' aria-hidden='true' /> +01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='text-center p-4'>
          © 2023 Copyright | Matgix System |{' '}
          <Link to='/TermsAndConditions' className='text-decoration-none text-dark font-weight-bold'>
            Terms & Conditions
          </Link>{' '}
          |{' '}
          <Link to='/PrivacyPolicy' className='text-decoration-none text-dark font-weight-bold'>
            Privacy Policy
          </Link>{' '}
          |
        </div>
      </footer>
    </div>
  );
}

export default Footer;
