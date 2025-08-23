import ParallaxBanner from "@/components/ParallaxBanner/ParallaxBanner";
import ContactBtn from "@/components/contactUsBtn/ContactBtn";
import Slideshow from "../components/lastProjectSlideshow/Slideshow";
// ---------------------- حذف کش
async function getData() {
    const res = await fetch("https://api.example.com/data", {cache: "no-store"}); // جلوگیری از کش
    return res.json();
}
const HomePage = () => {
    const images = [
      "/lastproject/house.webp",
      "/lastproject/Beautiful-living-room-with-a-fireplace.jpg",
      "/lastproject/View-through-kitchen-to-living-area.jpg",
    ];

    return (
        <>
            {/* _____________________ website banner _______________________ */}

            <ParallaxBanner />

            {/* _____________________ our service _______________________ */}

            <section className="ourService">
                <section className="ourServiceTitel">
                    <h2>خدمات ما</h2>
                    <p>
                        با بیش از ۳۰ سال سابقه درخشان در صنعت ساخت‌وساز، گروه ساختمانی آجرچین افتخار دارد که خدمات متنوع
                        و تخصصی خود را در زمینه طراحی، اجرا و نظارت بر پروژه‌های ساختمانی ارائه دهد. ما با تکیه بر
                        تجربه‌ی چند دهه‌ای، نیروی انسانی متخصص و بهره‌گیری از متریال‌های باکیفیت، همراه مطمئن شما در
                        تمامی مراحل ساخت و ساز هستیم.
                    </p>
                </section>

                <div className="servicecontainer">
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Consulting.svg" alt="آیکون مشاوه ساختمان" />
                            <h2>مشاوره، بررسی و امکان‌سنجی زمین</h2>
                            <p>ارزیابی فنی، حقوقی و اقتصادی زمین پیش از شروع پروژه.</p>
                        </div>
                    </div>
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/disign.svg" alt="آیکون طراحی ساختمان" />
                            <h2>طراحی و اخذ مجوز</h2>
                            <p>کشیدن نقشه‌های معماری و دریافت جواز ساخت از شهرداری.</p>
                        </div>
                    </div>
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/handshake.svg" alt="آیکون قرارداد ساختمان" />
                            <h2>عقد قرارداد مشارکت</h2>
                            <p>تنظیم قرارداد شفاف بین مالک و سازنده با تعیین سهم‌الشرکه.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/mony.svg" alt="آیکون تامین سرمایه" />
                            <h2>تأمین سرمایه و مدیریت مالی</h2>
                            <p>تأمین هزینه‌های ساخت و مدیریت مالی پروژه به صورت مرحله‌ای.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Destruction.svg" alt="آیکون آماده‌سازی زمین" />
                            <h2>تخریب و آماده‌سازی زمین</h2>
                            <p>تخریب بنای قدیمی و آماده‌سازی برای عملیات ساخت.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Supervision.svg" alt="آیکون نظارت بر ساخت" />
                            <h2>اجرا و نظارت بر ساخت</h2>
                            <p>انجام کلیه مراحل ساخت با نظارت فنی و مهندسی.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* _____________________ lastProjectSection _______________________ */}

            <section className="lastProjectSection">
                <div className="textPart">
                    <h2>جدیدترین پروژه تمام شده ما</h2>
                    <p className="textPartP">گروه ساختمانی آجرچین جدیدترین پروژه خود را با طراحی مدرن و استفاده از مصالح باکیفیت به پایان رسانده است. این پروژه فضایی امن، زیبا و کاربردی فراهم می‌کند و با رعایت اصول استحکام و نورپردازی طبیعی، تجربه زندگی راحت و آرام را ممکن می‌سازد. تیم حرفه‌ای آجرچین تمام مراحل ساخت را با دقت و تخصص مدیریت کرده است تا محیطی مناسب برای زندگی و سرمایه‌گذاری ایجاد شود.
این پروژه همچنین با ایجاد فضای سبز و امکانات رفاهی، کیفیت زندگی ساکنان را ارتقا می‌دهد.
طراحی هوشمندانه فضاها امکان بهره‌وری بهتر از محیط را فراهم کرده و آسایش ساکنان را تضمین می‌کند.
گروه آجرچین همواره تلاش می‌کند پروژه‌هایی ماندگار و ارزشمند برای مشتریان خود خلق کند.</p>
                    <section className="moreBtnContainer">
                        <div className="otherBtnContainer">
                            <a href="">
                                <div className="otherBtnCuboid">
                                    <div className="otherFaceBtn OtherFrontBtn">
                                        <p>دیدن پروژه های بیشتر</p>
                                    </div>
                                    <div className="otherFaceBtn otherLeftBtn">
                                        <p>دیدن پروژه های بیشتر</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="imagePart">
                    <span></span>
                    <Slideshow images={images} interval={4000} className="lastprojectslider" />
                    {/* <img src="/lastproject/home.jpg" alt="آخرین پروژه ساخته شده" /> */}
                </div>
            </section>

            {/* _____________________ pre sels Section _______________________ */}

            <section className="PreSaleSection">
                <div className="titelPart">
                    <h2>آپارتمانهای آماده پیش فروش</h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده
                    </p>
                </div>
                <section className="apartemens">
                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="./building/building.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیذ</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="./building/building.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیذ</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="./building/building.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیذ</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="./building/building.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیذ</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>

                <section className="moreBtnContainer">
                    <div className="otherBtnContainer">
                        <a href="">
                            <div className="otherBtnCuboid">
                                <div className="otherFaceBtn OtherFrontBtn">
                                    <p>مشاهده تمامی واحدها</p>
                                </div>
                                <div className="otherFaceBtn otherLeftBtn">
                                    <p>مشاهده تمامی واحد ها</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </section>

            {/* _____________________ call to us section _______________________ */}

            <section className="callToUsSection">
                <div className="textPart">
                    <h2>جهت کسب اطلاعات بیشتر با ما تماس بگیرید</h2>
                    <p>
                        برای دریافت مشاوره تخصصی در زمینه مشارکت در ساخت، پیش‌خرید یا خرید ملک با کارشناسان ما تماس بگیرید تا اطلاعات کاملی درباره فرصت‌های سرمایه‌گذاری و شرایط
                        همکاری دریافت کنید.
                    </p>
                    <section className="moreBtnContainer">
                        <div className="otherBtnContainer">
                            <a href="tel:09016791370">
                                <div className="otherBtnCuboid">
                                    <div className="otherFaceBtn OtherFrontBtn">
                                        <p>شماره تماس: ۰۹۰۱۶۷۹۱۳۷۰</p>
                                    </div>
                                    <div className="otherFaceBtn otherLeftBtn">
                                        <p>شماره تماس: ۰۹۰۱۶۷۹۱۳۷۰</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="imagePart">
                    <img src="./contactus/young-woman-call-center.jpg" alt="call manager in our compony" />
                </div>
            </section>

             {/* _____________________ carousel section _______________________ */}
            

        </>
    );
};
export default HomePage;