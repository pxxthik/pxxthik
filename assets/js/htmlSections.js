const footerContact = document.getElementById("contact-info");
const smallIntro = document.getElementById("smallIntro");

footerContact.innerHTML = `
    <a href="contact.html" class="btn">Contact Me<i class="uil uil-angle-right"></i></a>
    <div class="top-footer">
        <p><a href="mailto:pratheekbedrejun20@gmail.com"
                style="text-decoration: none; color: black;">pratheekbedrejun20@gmail.com</a></p>
    </div>
    <div class="middle-footer">
        <ul class="footer-social-icons">
            <li class="footer_menu_list">
                <a href="https://www.linkedin.com/in/pratheek-bedre/" class="flex-center">
                    <div class="icon"><i class="uil uil-linkedin-alt"></i></div> LinkedIn
                </a>
            </li>
            <li class="footer_menu_list">
                <a href="https://www.facebook.com/profile.php?id=100082734580353" class="flex-center">
                    <div class="icon"><i class="uil uil-facebook"></i></div>Facebook
                </a>
            </li>
            <li class="footer_menu_list">
                <a href="https://www.instagram.com/pxxthik/" class="flex-center">
                    <div class="icon"><i class="uil uil-instagram"></i></div>Instagram
                </a>
            </li>
            <li class="footer_menu_list">
                <a href="https://www.github.com/pxxthik/" class="flex-center">
                    <div class="icon"><i class="uil uil-github-alt"></i></div>Github
                </a>
            </li>
        </ul>
    </div>

    <div class="top-header" style="margin-bottom: 0;">
        <span>Also Checkout My</span>
    </div>

    <div class="middle-footer">
        <ul class="footer-social-icons">
            <li class="footer_menu_list">
                <a href="https://pxxthik.medium.com/">Medium</a>
            </li>
            <li class="footer_menu_list">
                <a href="https://www.kaggle.com/pxxthik">Kaggle</a>
            </li>
        </ul>
    </div>

    <div class="bottom-footer">
        <p>Copyright &copy; <a href="#home">pxxthik</a> - All rights reserved
        </p>
    </div>
`;

if (smallIntro) {
  smallIntro.innerHTML = `
    <div class="row">
        <div>
            <div class="about-info">
                <h3>My introduction</h3>
                <p>I'm a results-driven data scientist with expertise in statistical analysis, machine
                    learning, and data visualization. I turn data into actionable insights and have a track
                    record of driving innovation in diverse industries. Let's connect to explore how I can
                    contribute to your success.
                </p>
                <div id="techStacks"></div>
                <div class="about-btn">
                    <button onclick="downloadCV()" class="btn">Download CV <i class="uil uil-import"></i></button>
                </div>
            </div>
        </div>
    </div>
`;
}
