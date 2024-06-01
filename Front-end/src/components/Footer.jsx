import React from 'react'
import '../assets/footer.css'

const Footer = (props) => {
    return (
        <>
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">DECENTRALIZED(NDRF) Website Content Managed by NDRF - National Disaster Response Force, Ministry of Home Affairs, Government of India Designed, Developed and Hosted by National Informatics Centre( NIc).</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Reference Links</h6>
            <ul class="footer-links">
              <li><a href="https://www.mha.gov.in/">MHA</a></li>
              <li><a href="https://www.ndma.gov.in/">NDMA</a></li>
              <li><a href="https://nidm.gov.in/default.asp">NIDM</a></li>
              <li><a href="https://mausam.imd.gov.in/">IMD</a></li>
              <li><a href="https://www.nrsc.gov.in/">NRSC</a></li>
              <li><a href="http://cwc.gov.in/">CWC</a></li>
              <li><a href="https://bprd.nic.in/">BPR&D</a></li>
              <li><a href="https://bsf.gov.in/">BSF</a></li>
              <li><a href="https://www.cisf.gov.in/">CISF</a></li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Incidents</a></li>
              <li><a href="#">Interactive Map</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="https://ndrf.gov.in/"> NDRF</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer
