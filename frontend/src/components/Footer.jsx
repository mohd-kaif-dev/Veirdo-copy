const Footer = () => {
  return (
    <footer class="bg-[#00AA68] !mb-0">
      <div class="px-4 pt-12 lg:px-20 lg:pt-14">
        <div class="flex flex-col lg:flex-row lg:justify-between items-center">
          <div class="flex flex-col lg:w-[40%]">
            <div class=" uppercase font-[benzinExtraBold] text-[#CCDDD2] text-3xl">
              Join our <br />
              Veirdo fam
            </div>
          </div>

          <div class="w-full mt-4 lg:mt-0 lg:w-1/2 lg:max-w-[38.25rem]">
            <form
              method="post"
              action="/contact#ContactFooter"
              id="ContactFooter"
            >
              <input type="hidden" name="form_type" value="customer" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="contact[tags]" value="newsletter" />
              <div>
                <div class=" flex justify-between items-center w-full p-2 rounded-xl bg-white">
                  <input
                    type="email"
                    name="contact[email]"
                    class=" p-2 text-sm text-[#BCBBDB] font-[ibmMedium] "
                    value=""
                    aria-required="true"
                    autocorrect="off"
                    autocapitalize="off"
                    autocomplete="email"
                    placeholder="veirdo@yahoo.com"
                    required
                  />
                  <button
                    type="submit"
                    class=" right-0 px-4 py-3 lg:px-6 lg:py-4 uppercase bg-[#A740AF] rounded-md text-white text-center text-xs font-[ibmSemiBold]"
                    name="commit"
                    id="Subscribe"
                  >
                    subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-8">
          <div class="social-links-title text-black text-sm uppercase font-[ibmSemiBold]">
            Spot us on
          </div>
          <div class="social-links-inner grid grid-cols-2 border-[0.5px] border-black rounded-2xl mt-4 lg:flex lg:rounded-none lg:w-full">
            <a
              href="https://www.instagram.com/veirdo.in/"
              onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'INSTAGRAM'})"
              target="_blank"
              class="lg:hover:bg-[#00da85] !no-underline flex gap-3 items-center p-4 border-black  border-b-[0.5px]   lg:border-0 lg:border-l-[0.5px] lg:w-1/4"
            >
              <img
                src="//veirdo.in/cdn/shop/files/Insta.svg?v=1705474905"
                width="24"
                height="24"
                loading="lazy"
              />
              <div class="text-sm text-[#131814] uppercase font-[ibmMedium] ">
                INSTAGRAM
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/veirdo/?originalSubdomain=in"
              onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'Linkedin'})"
              target="_blank"
              class="lg:hover:bg-[#00da85] !no-underline flex gap-3 items-center p-4 border-black  border-b-[0.5px]   border-l-[0.5px] lg:border-0 lg:border-l-[0.5px] lg:w-1/4"
            >
              <img
                src="//veirdo.in/cdn/shop/files/Linked_in.svg?v=1706522836"
                width="24"
                height="24"
                loading="lazy"
              />
              <div class="text-sm text-[#131814] uppercase font-[ibmMedium] ">
                Linkedin
              </div>
            </a>

            <a
              href="https://twitter.com/Veirdooffical"
              onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'twitter'})"
              target="_blank"
              class="lg:hover:bg-[#00da85] !no-underline flex gap-3 items-center p-4 border-black   lg:border-0 lg:border-l-[0.5px] lg:w-1/4"
            >
              <img
                src="//veirdo.in/cdn/shop/files/Twitter.svg?v=1706522853"
                width="24"
                height="24"
                loading="lazy"
              />
              <div class="text-sm text-[#131814] uppercase font-[ibmMedium] ">
                twitter
              </div>
            </a>

            <a
              href="https://wa.me/7046702094?text=https%3A%2F%2Fveirdo.in%2F%0A%0AHi!%20I'm%20interested%20in%20this%20product.%20Can%20you%20tell%20me%20more%3F"
              onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'Whatsapp'})"
              target="_blank"
              class="lg:hover:bg-[#00da85] !no-underline flex gap-3 items-center p-4 border-black   border-l-[0.5px] lg:border-0 lg:border-l-[0.5px] lg:w-1/4"
            >
              <img
                src="//veirdo.in/cdn/shop/files/WhatsApp.svg?v=1706522871"
                width="24"
                height="24"
                loading="lazy"
              />
              <div class="text-sm text-[#131814] uppercase font-[ibmMedium] ">
                Whatsapp
              </div>
            </a>
          </div>
        </div>

        <div class="accordian-links-wrapper lg:flex lg:justify-between lg:mt-16">
          <div class="footer-links-accordion lg:border-b-0 lg:w-1/4">
            <div class="footer-links-header font-[ibmSemiBold] text-sm uppercase">
              Categories
            </div>
            <div class="footer-links-body-content lg:block lg:border-none lg:mt-8">
              <div>
                <a
                  href="/collections/mens-t-shirts "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'OVERSIZED T-SHIRTS',redirect_url:'/collections/mens-t-shirts'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  OVERSIZED T-SHIRTS
                </a>
              </div>

              <div>
                <a
                  href="/collections/latest-drop-by-veirdo "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'NEW ARRIVALS',redirect_url:'/collections/latest-drop-by-veirdo'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  NEW ARRIVALS
                </a>
              </div>

              <div>
                <a
                  href="/collections/best-sellers-of-veirdo "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'BEST SELLERS',redirect_url:'/collections/best-sellers-of-veirdo'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  BEST SELLERS
                </a>
              </div>

              <div>
                <a
                  href="https://veirdo.in/collections/regular-fit-t-shirts "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'CLASSIC FIT T-SHIRT ',redirect_url:'https://veirdo.in/collections/regular-fit-t-shirts'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  CLASSIC FIT T-SHIRT
                </a>
              </div>

              <div>
                <a
                  href="/collections/cargos "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'CARGOS',redirect_url:'/collections/cargos'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  CARGOS
                </a>
              </div>

              <div>
                <a
                  href="https://veirdo.in/collections/hoodies-sweatshirts "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'WINTER-WEAR',redirect_url:'https://veirdo.in/collections/hoodies-sweatshirts'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  WINTER-WEAR
                </a>
              </div>
            </div>
          </div>

          <div class="footer-links-accordion lg:border-b-0 lg:w-1/4">
            <div class="footer-links-header font-[ibmSemiBold] text-sm uppercase">
              Company
            </div>
            <div class="footer-links-body-content lg:block lg:border-none lg:mt-8">
              <div>
                <a
                  href="/pages/about-us-new "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'ABOUT-US',redirect_url:'/pages/about-us-new'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  ABOUT-US
                </a>
              </div>

              <div>
                <a
                  href="/blogs/news "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'BLOG',redirect_url:'/blogs/news'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  BLOG
                </a>
              </div>

              <div>
                <a
                  href="/policies/privacy-policy "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'PRIVACY POLICY',redirect_url:'/policies/privacy-policy'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  PRIVACY POLICY
                </a>
              </div>

              <div>
                <a
                  href="/policies/terms-of-service "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'TERMS &amp; CONDITIONS',redirect_url:'/policies/terms-of-service'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  TERMS &amp; CONDITIONS
                </a>
              </div>

              <div>
                <a
                  href="/pages/work-with-us "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'WORK WITH US',redirect_url:'/pages/work-with-us'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  WORK WITH US
                </a>
              </div>
            </div>
          </div>

          <div class="footer-links-accordion lg:border-b-0 lg:w-1/4">
            <div class="footer-links-header font-[ibmSemiBold] text-sm uppercase">
              Customers
            </div>
            <div class="footer-links-body-content lg:block lg:border-none lg:mt-8">
              <div>
                <a
                  href="/pages/contact-us "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'CONTACT US',redirect_url:'/pages/contact-us'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  CONTACT US
                </a>
              </div>

              <div>
                <a
                  href="/pages/faq-s "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'FAQs',redirect_url:'/pages/faq-s'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  FAQs
                </a>
              </div>

              <div>
                <a
                  href="/pages/shipping-policy "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'SHIPPING POLICY',redirect_url:'/pages/shipping-policy'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  SHIPPING POLICY
                </a>
              </div>

              <div>
                <a
                  href="/policies/refund-policy "
                  onclick="footerGaEvents('Footer_Element_Click',{section_name:'Footer',element_name:'REFUND POLICY',redirect_url:'/policies/refund-policy'})"
                  class="text-xs font-[ibmMedium] pb-3 cursor-pointer"
                >
                  REFUND POLICY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" overflow-hidden">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          <div class="flex px-[1rem] py-[0.5rem] lg:py-[0.75rem]">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} class="flex gap-2 min-w-max">
                <span class=" text-[#FFDF38] font-[benzinExtrabold] text-[144px] leading-none mr-24">
                  FIND YOUR FLIP SIDE
                </span>{" "}
              </div>
            ))}
          </div>
        </marquee>
      </div>

      <div class="flex justify-between px-4 lg:px-20 lg:pb-14 pb-5 font-[ibmMedium] text-xs text-[#2C3E37] ">
        <div class="">Copyright © VEIRDO 2025. Recreated by MOHD KAIF</div>
      </div>
    </footer>
  );
};

export default Footer;
