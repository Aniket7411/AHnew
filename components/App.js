import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { HomeProvider } from "./contextManager/homecontext";
import { ScrollProvider } from "./components/scrollContext";

// Pages
import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndC";
import RefundPolicies from "./pages/refundPolicies/RefundPolicies";
import ContactPage from "./pages/contactPage/ContactPage";
import BlogsPage from "./pages/blogs/Blogs";
import SingleBlogPage from "./pages/blogsSingle/BlogsSingle";
import Career from "./pages/career/Career";
import AcademicWriter from "./pages/AcademicWriter/AcademicWriter";
import MarketingExecutive from "./pages/MarketingExecutive/MarketingExecutive";
import PlansPage from "./pages/Plan/PlansPage";
import ServicesSingle from "./pages/ServicesSingle/ServicesSingle";

// Country-specific Pages
import PageForCountry from "./pages/pagesforcountry";
import UkPage from "./pages/ukpage";
// import AustraliaPage from "./pages/autraliapage";
import CanadaPage from "./pages/canadapage";
// import DubaiPage from "./pages/dubaipage";
import GermanyPage from "./pages/germany";
// import IrelandPage from "./pages/ireland";
// import NewZealandPage from "./pages/newzeland";

function App() {



  return (
    <>
      <BrowserRouter>
        <HomeProvider>
          <ScrollToTop />
          <ScrollProvider>
            <Routes>

              <Route path="/" element={<Layout><Homepage /></Layout>} />
              <Route path="/united-kingdom" element={<Layout><UkPage /></Layout>} />
              {/* <Route path="/australia" element={<Layout><AutrailiaPage /></Layout>} /> */}
              <Route path="/canada" element={<Layout><CanadaPage /></Layout>} />
              {/* <Route path="/dubai" element={<Layout><Dubaipage /></Layout>} /> */}
              <Route path="/germany" element={<Layout><GermanyPage /></Layout>} />

              {/* <Route path="/ireland" element={<Layout><Ireland /></Layout>} /> */}
              {/* <Route path="/newzealand" element={<Layout><NewZealand /></Layout>} /> */}

              {/* )} */}
              <Route path="/pageforcountry" element={<Layout><PageForCountry /></Layout>} />
              <Route
                path="/about-us"
                element={
                  <Layout>
                    <AboutUs />
                  </Layout>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <Layout>
                    <PrivacyPolicy />
                  </Layout>
                }
              />
              <Route
                path="/terms-and-conditions"
                element={
                  <Layout>
                    <TermsAndConditions />
                  </Layout>
                }
              />
              <Route
                path="/Refund-Policies"
                element={
                  <Layout>
                    <RefundPolicies />
                  </Layout>
                }
              />

              <Route
                path="/contact-us"
                element={
                  <Layout>
                    <ContactPage />
                  </Layout>
                }
              />

              <Route
                path="/blogs"
                element={
                  <Layout>
                    <BlogsPage />
                  </Layout>
                }
              />

              <Route
                path="/blog/:id"
                element={
                  <Layout>
                    <SingleBlogPage />
                  </Layout>
                }
              />

              <Route
                path="/career"
                element={
                  <Layout>
                    <Career />
                  </Layout>
                }
              />
              <Route
                path="/career/ACW"
                element={
                  <Layout>
                    <AcademicWriter />
                  </Layout>
                }
              />
              <Route
                path="/career/ME"
                element={
                  <Layout>
                    <MarketingExecutive />
                  </Layout>
                }
              />
              <Route
                path="/plans"
                element={
                  <Layout>
                    <PlansPage />
                  </Layout>
                }
              />

              <Route
                path="/services/:id"
                element={
                  <Layout>
                    <ServicesSingle />
                  </Layout>
                }
              />

              {/* <Route
              path="/career"
              element={
                <Layout>
                  <Plan />
                </Layout>
              }
            /> */}
            </Routes>
          </ScrollProvider>
        </HomeProvider>
      </BrowserRouter>
    </>
    //nothing
  );
}

export default App;
