import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-full lg:h-[60vh] bg-accent mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p className="text-xl">Best quality</p>
            <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img alt="" src={BucketGirl} class="h-full" />
          </div>
        </div>
      </div>

      {/* ------------- */}
      <div className="rounded-2xl mx-auto mt-[-50px] relative bg-base-200 shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">get a quote</button>
      </div>
    </>
  );
};

export default Landing;
