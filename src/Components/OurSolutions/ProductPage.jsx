import { useParams } from "react-router-dom";

export default function ProductPage({ data }) {
  console.log("data", data);
  return (
    <main className='bgGrey py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-8'>
        {/* ================= TOP SECTION ================= */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
          {/* IMAGE */}
          {/* <div className='flex min-h-[320px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm lg:col-span-5'>
            <img
              src={data.images[0]}
              alt={data.label}
              className='max-h-[350px] w-full object-contain'
            />
          </div> */}
          <div className={`flex min-h-[320px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm lg:col-span-5 product-sprite ${data.className}`} ></div>

          {/* USP */}
          <div className='rounded-2xl bg-white p-8 shadow-sm lg:col-span-7'>
            <p className='text-xl font-bold uppercase tracking-wide textOrange'>
              Key Features
            </p>

            <h1 className='mt-2 text-3xl font-bold textBlue sm:text-4xl'>
              {data.label}
            </h1>

            <p className='mt-5 fontSize20px leading-7 textBlue'>
              {data.description}
            </p>

            {/* USP LIST */}
            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {data?.usp.map((item, index) => {
                return (
                  <div className='flex gap-3' key={index}>
                    <span className='textOrange font-bold'>✓</span>
                    <span className='text-xl textOrange font-bold'>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12'>
          {/* TECHNICAL SPECIFICATIONS */}
          <div className='rounded-2xl bg-white p-8 shadow-sm lg:col-span-7'>
            <p className='text-xl font-bold uppercase tracking-wide textOrange'>
              Specifications
            </p>

            <h2 className='mt-2 text-2xl font-bold textBlue'>
              Technical Specifications
            </h2>

            <div className='mt-6 overflow-hidden rounded-xl border border-gray-200'>
              {data?.techSpec.map((item, index) => {
                return (
                  <div
                    className='grid grid-cols-2 border-b border-gray-200 px-4 py-4'
                    key={index}>
                    <span className='font-bold textBlue fontSize20px'>
                      {item.label}
                    </span>
                    <span className='textOrange font-bold fontSize20px '>
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* VIDEO */}
          <div className='rounded-2xl bg-white p-8 shadow-sm lg:col-span-5'>
            <p className='text-xl font-bold uppercase tracking-wide textOrange'>
              See It In Action
            </p>

            <h2 className='mt-2 text-2xl font-bold textBlue'>Product Video</h2>

            <div className='mt-6 aspect-video overflow-hidden rounded-xl bg-gray-100'>
              <iframe
                className='h-full w-full'
                src='https://www.youtube.com/embed/VIDEO_ID'
                // title={`${productName} video`}
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className='mt-6 rounded-2xl bgBlue px-6 py-8 text-center sm:px-10'>
          <h2 className='text-2xl font-bold text-white'>
            Have questions about this solution?
          </h2>

          <p className='mx-auto mt-2 max-w-2xl text-lg leading-6 text-gray-200'>
            Our experts can help you choose the right solution for your
            production requirements.
          </p>

          <a
            href='https://wa.me/8006902440?text=Hi! I’d like to know more about your products and services.'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-flex rounded-md bgOrange px-5 py-3 text-xl font-bold text-white transition hover:opacity-90'>
            Connect With Our Experts
          </a>
        </div>
      </div>
    </main>
  );
}
