   <Routes>

              <Route path="/" element={<Layout><Homepage /></Layout>} />
              <Route path="/uk" element={<Layout><UkPage /></Layout>} />
              <Route path="/australia" element={<Layout><AutrailiaPage /></Layout>} />
              <Route path="/canada" element={<Layout><CanadaPage /></Layout>} />
              <Route path="/dubai" element={<Layout><Dubaipage /></Layout>} />
              <Route path="/germany" element={<Layout><GermanyPage /></Layout>} />

              <Route path="/ireland" element={<Layout><Ireland /></Layout>} />
              <Route path="/newzealand" element={<Layout><NewZealand /></Layout>} />

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


      