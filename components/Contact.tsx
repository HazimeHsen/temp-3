import React from "react";
import Animation from "./Animation";

const Contact = () => {
  return (
    <div id="contact" className="container mt-10 mx-auto px-6">
      <section className="">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <div className="max-w-3xl mx-auto text-center md:text-start md:pb-0 pb-12 ">
              <Animation animationType="fade-left">
                <h2 className="h2 mb-4">Contact Us</h2>
              </Animation>
              <Animation animationType="fade-right">
                <p className="text-xl text-gray-400">
                  Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                  semper quis lectus nulla at volutpat diam ut venenatis
                  tellus—in ornare.
                </p>
              </Animation>
            </div>
            <Animation animationType="fade-bottom">
              <div className="md:block flex w-full flex-col items-center mt-3">
                <p className="mb-2 text-neutral-500 ">
                  New York, 94126, United States
                </p>
                <p className="mb-2 text-neutral-500 ">+ 01 234 567 89</p>
                <p className="mb-2 text-neutral-500 ">info@gmail.com</p>
              </div>
            </Animation>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form>
              <Animation animationType="fade-bottom">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
              </Animation>
              <Animation animationType="fade-bottom">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
              </Animation>
              <Animation animationType="fade-bottom">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"></textarea>
                </div>
              </Animation>
              <Animation animationType="fade-bottom">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block bg-gray-800 w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white ">
                  Send
                </button>
              </Animation>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
